<template>
  <article class="markdown-body" v-html="start">

  </article>
</template>

<script>
  import start from '../markdown/start.md'

  export default {
    data() {
      return {
        start
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>