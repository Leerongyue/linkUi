<template>
  <h1>Switch组件示例</h1>
  <Demo :component="Switch1Demo"
        description="<div>使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量</div>"/>
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