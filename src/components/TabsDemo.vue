<template>
  <div class="link-section-wrapper">
    <h1>Tabs示例</h1>
    <div class="link-section-component">
      <h3><span>#</span> 基础用法</h3>
      <h4>
        使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量
        <Demo :component="Tabs1Demo"/>
      </h4>
    </div>
    <div class="link-section-component">
      <h3><span>#</span> 支持disabled</h3>
      <h4>
        在指定<span>Tab</span>中添加<span>disabled</span>属性来禁止选中该Tab组件
        <Demo :component="Tabs2Demo"/>
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
  import Demo from './Demo.vue';
  import Tabs1Demo from './Tabs1Demo.vue';
  import Tabs2Demo from './Tabs2Demo.vue';

  export default {
    components: {
      Demo
    },
    setup() {
      return {
        Tabs1Demo,
        Tabs2Demo
      };
    }
  };
</script>
<style lang="scss" scoped>
  @import "src/style/componentDemo";
</style>