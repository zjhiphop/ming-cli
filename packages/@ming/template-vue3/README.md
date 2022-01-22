# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Features

### Project structure
>   ├── CHANGELOG.md
    ├── README.md
    ├── index.html  // Main Entry html
    ├── package.json
    ├── public
    │   └── favicon.ico
    ├── src
    │   ├── App.vue                   // Global application component
    │   ├── assets
    │   │   └── logo.png
    │   ├── common                    // Global shared components/directives/middles/mixins/plugins
    │   │   ├── components
    │   │   │   └── HelloWorld.vue
    │   │   ├── directives
    │   │   │   └── readme.md
    │   │   ├── middlewares
    │   │   │   └── readme.md
    │   │   ├── mixins
    │   │   │   └── readme.md
    │   │   └── plugins
    │   │       └── readme.md
    │   ├── main.js
    │   ├── routers                  // Dynamic routes defined by View folder structure inspired by NuxtJS
    │   │   ├── index.js
    │   │   ├── readme.md
    │   │   └── routes.js
    │   ├── services                 // API, Storage services etc.
    │   │   └── readme.md
    │   ├── static                   // Public static assets
    │   │   └── readme.md
    │   ├── store                    // Global store management. Vuex is recommended.
    │   │   └── readme.md
    │   └── views                    // Page level Views
    │       ├── Index.vue
    │       ├── nest
    │       │   ├── Create.vue
    │       │   ├── Index.vue
    │       │   ├── _Id.vue
    │       │   └── edit
    │       │       └── _Id.vue
    │       └── readme.md
    └── vite.config.js

### Dynamic routes inspired by NuxtJS
