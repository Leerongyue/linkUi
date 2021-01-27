<template>
  <h1>Switch组件示例</h1>
  <Demo :component="Switch1Demo"/>
  <Demo :component="Switch2Demo"/>
</template>

<script lang="ts">
  import Switch1Demo from "./Switch1Demo.vue";
  import Switch2Demo from "./Switch2Demo.vue";
  import Demo from "./Demo.vue";

  export default {
    name: "SwitchDemo",
    components: {Demo},
    setup() {
      return {
        Switch1Demo,
        Switch2Demo,
      };
    }
  };
</script>