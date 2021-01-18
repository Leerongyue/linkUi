<template>
  <button class="link-button" :class="`theme-${theme}`">
    <slot/>
  </button>
</template>

<script lang="ts">
  export default {
    // inheritAttrs: false,
    props: {
      theme: {
        type: String,
        default: "button"
      }
    },
    setup() {

    }
  };
</script>

<style lang="scss" scoped>
  button {
    background: gray;
    color: white;
  }
</style>