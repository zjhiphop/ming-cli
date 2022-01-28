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
  enableConvertComment: 'on',
  disableConvertComment: 'off',
  mediaQuery: false
}

function createPxReplace(viewportSize, minPixelValue, viewportUnit) {
  return function (m, $1) {
    if (!$1) return m
    const pixels = parseFloat($1)
    if (pixels <= minPixelValue) return m
    return parseFloat(((pixels / viewportSize) * 100).toFixed(5)) + viewportUnit
  }
}

function blacklistedProperty(blacklist, property) {
  if (typeof property !== 'string') return
  return blacklist.some(function (regex) {
    if (typeof regex === 'string') return property.indexOf(regex) !== -1
    return property.match(regex)
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
          !blacklistedProperty(opts.propertyBlacklist, decl.prop)
        ) {
          commentText === opts.enableConvertComment && next.remove()
          // 1. check whether there is a parent is mediaQuery
          const parentMediaRule = parentMedia(decl)
          // 2. if yes, find the the min-width value, if it's unit is px,
          // then convert it to `viewportUnit` relative to min-width value
          if (parentMediaRule && parentMediaRule.params.indexOf('px') > -1) {
            const matches = parentMediaRule.params.match(/min-width:\s+(\d+)px/)
            if (matches) {
              const mediaPxReplace = createPxReplace(
                matches[1],
                opts.minPixelValue,
                opts.viewportUnit
              )
              decl.value = decl.value.replace(pxRegex, mediaPxReplace)
            }
          }
          decl.value = decl.value.replace(pxRegex, pxReplace)
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
