# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Features

### Project structure

>

    ├── CHANGELOG.md
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
    │   ├── main.ts
    │   ├── routers                  // Dynamic routes defined by View folder structure inspired by NuxtJS
    │   │   ├── index.ts
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
    └── .eslintrc                   // JS lint rules
    └── .prettierrc                 // code prettier rules
    └── .stylelintrc.ts             // style lint rules
    └── .browserlistrc.ts           // browser support version info
    └── vite.config.ts
    └── tsconfig.json

### Dynamic routes inspired by NuxtJS

### IDE Recommended

> For better development experience, please use VS Code. The benefit of VS Code including:
>
> 1. The code format and lint based on the template config
> 2. Keep the same extension and plugins config

### Styles Integrate

The Styles may very different depending different level of project. Here not limited to specific styles.
Alternatively please follow the rules below to select the right styles solution.

> Rule one: use vallina css3 for quick and small websites. For example: Keppel Caregiver
> Rule two: use Scss/Less/Tailwind for middle level of projects. For example: Micro Sites
> Rule three: use WindiCSS for large level of projects. For example: SOS, Basf
