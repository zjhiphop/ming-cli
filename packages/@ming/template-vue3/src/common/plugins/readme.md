Plugins
=======

> Extend global vue functionality. https://v3.vuejs.org/guide/plugins.html#using-a-plugin 

```js
// plugins/i18n.js
export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = key => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }
  }
}
```

