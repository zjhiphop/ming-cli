# Px2Viewport

> A plugin for PostCSS that generates viewport units (vw, vh, vmin, vmax) from pixel units.

### Installation

`npm install postcss-px2vwpt`

### Features

![Demo](https://raw.githubusercontent.com/zjhiphop/ming-cli/master/packages/plugins/postcss-px2viewport/assets/poster.jpg 'A case to illustrate the responsive breakpoint')

- Convert px value to viewport with by default, support convert to other unit by configuration
- Convert px value based on media query value, if there is no media query, the default relative screen size will be 750px
- Convert px value be different media query scope
- Min scale or max scale both supported, min scale meaning it will use the min-width value as base to convert in the media query scope
- Max screen size, it enable to control the maximum screen size to scale

```html
.class { margin: -10px 0.5vh; padding: 5vmin 9.5px 1px; border: 3px solid black;
border-bottom-width: 1px; font-size: 14px; /*on*/ line-height: 20px; /*off*/ }
.class2 { border: 1px solid black; margin-bottom: 1px; font-size: 20px;
line-height: 30px; } @media (min-width: 750px) { .class3 { font-size: 16px;
line-height: 22px; } } @media (min-width: 1440px) { .class3 { font-size: 16px;
line-height: 22px; } }
```

will be converted to:

```

.class {
  margin: -1.33333vw .5vh;
  padding: 5vmin 1.26667vw 1px;
  border: 0.4vw solid black;
  border-bottom-width: 1px;
  font-size: 1.86667vw;
  line-height: 20px;
}

.class2 {
  border: 1px solid black;
  margin-bottom: 1px;
  font-size: 2.66667vw;
  line-height: 4vw;
}

@media (min-width: 750px) {
  .class3 {
    font-size: 2.13333vw;
    line-height: 2.93333vw;
  }
}

@media (min-width: 1440px) {
  .class3 {
    font-size: 1.11111vw;
    line-height: 1.52778vw;
  }
}

```

### Program Example

```javascript
'use strict'

var fs = require('fs')
var postcss = require('postcss')
var px2viewport = require('postcss-px2vp')
var css = `
.class2 {
  border: 1px solid black;
  margin-bottom: 1px;
  font-size: 20px;
  line-height: 30px;/*off*/
}

@media (min-width: 750px) {
  .class3 {
    font-size: 16px;
    line-height: 22px;
  }
}
`
var options = {
  propertyBlacklist: ['font-size']
}
var processedCss = postcss(px2viewport(options)).process(css).css
/*
 Output:

.class2 {
  border: 1px solid black;
  margin-bottom: 1px;
  font-size: 2.66667vw;
  line-height: 30px;
}

@media (min-width: 750px) {
  .class3 {
    font-size: 2.13333vw;
    line-height: 2.93333vw;
  }
}

*/
```

### Options

Default:

```js
{
  viewportWidth: 750,
  viewportUnit: 'vw',
  propertyBlacklist: [],
  minPixelValue: 2,
  enableMaxScale: false,
  maxPixelValue: 1440,
  maxBreakpointsPixelValue: 9999,
  enableConvertComment: 'on',
  disableConvertComment: 'off',
  mediaQuery: false
}
```

- `viewportWidth` (Number) The width of the viewport.
- `viewportUnit` (String) Expected units
- `propertyBlacklist` (Array) The propertys to ignore and leave as px.
  - If value is string, it checks to see if property contains the string.
    - `['font']` will match `font-size`
  - If value is regexp, it checks to see if the property matches the regexp.
    - `[/^font$/]` will match `font` but not `font-size`
- `minPixelValue` (Number) Set the minimum pixel value to replace.
- `enableMaxScale` (Boolean) Whether to enable to scale the value based on the bigger value of media query
- `maxPixelValue` (Number) The max value used to scale, when the page size is bigger than this value will only use this value to scale
- `maxBreakpointsPixelValue` (Number) The max page size to scale, when screen size reached this value, page will not be scaled any more.
- `enableConvertComment` (String) content of comment for enable convert px unit before the declaration.
- `disableConvertComment` (String) content of comment for disable convert px unit before the declaration.
- `mediaQuery` (Boolean) Allow px to be converted in media queries.

### Use comment to enable/disable convert px value for single declaration

- `font-size: 14px;/*on*/` comment before the declaration will convert px to viewport unit, if `font-size` is in your property blacklist but you want to convert this single declaration.
- `font-size: 14px;/*off*/` comment before the declaration will not convert px unit.

### Using with tailwind

```javascript
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-px2vp": {}
  }

```

### Inspired by

> https://github.com/sexyHuang/postcss-px2vp > https://github.com/evrone/postcss-px-to-viewport/
