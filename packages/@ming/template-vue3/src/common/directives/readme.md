Directives
=======

> Composable functionality for vue components. [LINK](https://v3.vuejs.org/guide/migration/custom-directives.html#_3-x-syntax)

```js
const MyDirective = {
  created(el, binding, vnode, prevVnode) {}, // new
  beforeMount() {},
  mounted() {},
  beforeUpdate() {}, // new
  updated() {},
  beforeUnmount() {}, // new
  unmounted() {}
}

// <p v-highlight="'yellow'">Highlight this text bright yellow</p>

const app = Vue.createApp({})

app.directive('highlight', {
  beforeMount(el, binding, vnode) {
    el.style.background = binding.value
  }
})

```

