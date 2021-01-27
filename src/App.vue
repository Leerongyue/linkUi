<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  import {ref, provide} from 'vue';

  export default {
    name: 'App',
    setup() {
      const width = document.documentElement.clientWidth;
      const asideVisible = ref(width > 500);
      provide('asideVisible', asideVisible);
      provide('width', width);
    }
  };
</script>
<style lang="scss" scoped>
  @import "style/reset";
  @import "style/helper";

  #app {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: $font-hei;
    color: #333;
    font-size: 16px;
    line-height: 1.5;
  }
</style>
