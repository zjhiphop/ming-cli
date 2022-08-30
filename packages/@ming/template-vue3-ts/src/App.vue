<script lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import { onMounted } from 'vue'

  export default {
    props: ['store'],
    setup() {
      // onMounted(() => {})
    },
    data() {
      return {}
    },
  }
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.svg" />
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
    <router-link to="/nest/1">Nest 1 details</router-link> |
    <router-link :to="{ name: 'User' }">User</router-link> |
    <router-link to="/user/detail">User detail</router-link>
  </p>
  <router-view></router-view>
</template>

<style type="text/css">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
