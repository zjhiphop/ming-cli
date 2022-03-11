// excluding regex trick: http://www.rexegg.com/regex-best-trick.html
// Not anything inside double quotes
// Not anything inside single quotes
// Not anything inside url()
// Any digit followed by px
// !singlequotes|!doublequotes|!url()|pixelunit
const pxRegex = /"[^"]+"|'[^']+'|url\([^\)]+\)|(\d*\.?\d+)px/gi

const defaults = {
  viewportWidth: 750,
  viewportUnit: 'vw',
  propertyBlacklist: [],
  minPixelValue: 2,
  enableMaxScale: false, // whether use the max value of the range as the basic value to convert
  maxPixelValue: 1440,
  maxBreakpointsPixelValue: 9999,
  enableConvertComment: 'on',
  disableConvertComment: 'off',
  mediaQuery: false,
  selectorBlackList: []
}

function createPxReplace(viewportSize, minPixelValue, viewportUnit) {
  return function (m, $1) {
    if (!$1) return m
    const pixels = parseFloat($1)
    if (pixels <= minPixelValue) return m

    return parseFloat(((pixels / viewportSize) * 100).toFixed(5)) + viewportUnit
  }
}

function createMaxPxReplaceToPx(maxPixel, maxSize, minPixelValue) {
  return function (m, $1) {
    if (!$1) return m
    const pixels = parseFloat($1)
    if (pixels <= minPixelValue) return m

    return parseFloat(((pixels / maxPixel) * maxSize).toFixed(5)) + 'px'
  }
}

function blacklistedProperty(blacklist, property) {
  if (typeof property !== 'string') return
  return blacklist.some(function (regex) {
    if (typeof regex === 'string') return property.indexOf(regex) !== -1
    return property.match(regex)
  })
}

function blacklistedSelector(blacklist, selector) {
  if (typeof selector !== 'string') return

  return blacklist.some((rule) => {
    if (typeof rule === 'string') return selector.includes(rule)
    return rule.test(selector)
  })
}

function parentMedia(node) {
  let parent = node.parent

  while (parent) {
    if (parent.type === 'atrule') {
      return parent
    }

    parent = parent.parent
  }
}

module.exports = (options) => {
  const opts = Object.assign({}, defaults, options)
  const pxReplace = createPxReplace(
    opts.viewportWidth,
    opts.minPixelValue,
    opts.viewportUnit
  )

  return {
    postcssPlugin: 'postcss-px2viewport',
    Once: (css, { result }) => {
      css.walkDecls(function (decl, i) {
        const next = decl.next()
        const commentText = next && next.type == 'comment' && next.text

        if (
          decl.value.indexOf('px') === -1 ||
          commentText === opts.disableConvertComment
        ) {
          commentText === opts.disableConvertComment && next.remove()
          return
        }
        if (
          commentText === opts.enableConvertComment ||
          (!blacklistedProperty(opts.propertyBlacklist, decl.prop) &&
            !blacklistedSelector(opts.selectorBlackList, decl.parent.selector))
        ) {
          commentText === opts.enableConvertComment && next.remove()
          // 1. check whether there is a parent is mediaQuery
          const parentMediaRule = parentMedia(decl)
          // 2. if yes, find the the min-width value, if it's unit is px,
          // then convert it to `viewportUnit` relative to min-width value
          if (parentMediaRule && parentMediaRule.params.indexOf('px') > -1) {
            const minMatches =
              parentMediaRule.params.match(/min-width:\s+(\d+)px/)
            const maxMatches =
              parentMediaRule.params.match(/max-width:\s+(\d+)px/)
            const matches = opts.enableMaxScale ? maxMatches : minMatches

            if (matches) {
              let mediaPxReplace = null

              if (parseFloat(matches[1]) > opts.maxBreakpointsPixelValue) {
                mediaPxReplace = createMaxPxReplaceToPx(
                  opts.maxPixelValue,
                  opts.maxBreakpointsPixelValue,
                  opts.minPixelValue
                )
              } else {
                mediaPxReplace = createPxReplace(
                  matches[1],
                  opts.minPixelValue,
                  opts.viewportUnit
                )
              }

              decl.value = decl.value.replace(pxRegex, mediaPxReplace)
            } else {
              decl.value = decl.value.replace(pxRegex, pxReplace)
            }
          }
        }
      })

      if (opts.mediaQuery) {
        css.walkAtRules('media', function (rule) {
          if (rule.params.indexOf('px') === -1) return
          rule.params = rule.params.replace(pxRegex, pxReplace)
        })
      }
    }
  }
}

module.exports.postcss = true
