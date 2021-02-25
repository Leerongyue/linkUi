<template>
  <div class="link-section-wrapper">
    <h1>Button 示例</h1>
    <div class="link-section-component">
      <h3><span>#</span> 常规用法</h3>
      <h4>
        使用<span>theme</span>属性来改变Button组件的<span>主题</span>
      </h4>
      <Demo :component="BackToTopDemo1"/>
    </div>
    <div class="link-section-component">
      <h3><span>#</span> 常规用法</h3>
      <h4>
        使用<span>theme</span>属性来改变Button组件的<span>主题</span>
      </h4>
      <Demo :component="BackToTopDemo1"/>
    </div>
  </div>
</template>

<script lang="ts">
  import BackToTopDemo1 from './BackToTopDemo1.vue';
  import Demo from './Demo.vue';

  export default {
    components: {
      Demo
    },
    setup() {
      return {
        BackToTopDemo1
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "src/style/componentDemo";
</style>