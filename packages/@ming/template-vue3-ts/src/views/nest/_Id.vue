<template>
  <div>
    <h1>This is a page of the post with id {{ $route.params.id }}</h1>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'NestDetails',
  }
</script>
