<template>
  <div class="link-section-wrapper">
    <h1>Switch组件示例</h1>
    <div class="link-section-component">
      <h3><span>#</span> 基础用法</h3>
      <h4>
        使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量
      </h4>
      <Demo :component="Switch1Demo"/>
    </div>
    <div class="link-section-component">
      <h3><span>#</span> 支持disabled</h3>
      <h4>
        添加<span>disabled</span>属性来<span>禁用Switch组件</span>
      </h4>
      <Demo :component="Switch2Demo"/>
    </div>
  </div>
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
<style lang="scss" scoped>
  @import "src/style/componentDemo";
</style>