<template>
  <button>
    <slot/>
  </button>
</template>

<script lang="ts">
  export default {
    inheritAttrs: false,
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