<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted } from 'vue'

export default {
  props: ['store'],
  data() {
    return {}
  },
  setup() {
    onMounted(() => {})
  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>
    Debug: <br />
    isMobile: {{ store.isMobile }}<br />
    isPc: {{ store.isPc }}<br />
    isTablet: {{ store.isTablet }}<br />
    fontLoaded: {{ store.fontLoaded }}<br />
  </p>

  <p>
    <router-link to="/">Home</router-link> |
    <router-link to="/nest">Nest Page</router-link> |
    <router-link to="/nest/create">Nest create</router-link> |
    <router-link to="/nest/1">Nest 1 details</router-link>
  </p>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
