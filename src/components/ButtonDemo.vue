<template>
  <div class="link-section-wrapper">
    <h1>Button 示例</h1>
    <div class="link-section-component">
      <h3><span>#</span> 基础用法</h3>
      <h4>
        使用<span>theme</span>属性来改变Button组件的<span>主题</span>
      </h4>
      <Demo :component="Button1Demo"/>
    </div>
    <div class="link-section-component">
      <h3><span>#</span> 支持size</h3>
      <h4>
        使用<span>size</span>属性来改变Button组件的<span>大小</span>
      </h4>
      <Demo :component="Button2Demo"/>
    </div>
    <div class="link-section-component">
      <h3><span>#</span> 支持level</h3>
      <h4>
        使用<span>level</span>属性来改变Button组件的<span>颜色</span>
      </h4>
      <Demo :component="Button3Demo"/>
    </div>
    <div class="link-section-component">
      <h3><span>#</span> 支持round</h3>
      <h4>
        使用<span>round</span>属性来改变Button组件的<span>形状</span>
      </h4>
      <Demo :component="Button6Demo"/>
    </div>
    <div class="link-section-component">
      <h3><span>#</span> 支持disabled</h3>
      <h4>
        使用<span>disabled</span>属性来<span>禁止</span> Button组件被<span>点击</span>
      </h4>
      <Demo :component="Button4Demo"/>
    </div>
    <div class="link-section-component">
      <h3><span>#</span> 支持loading</h3>
      <h4>
        使用<span>loading</span>属性表示Button组件<span>正在加载</span>
      </h4>
      <Demo :component="Button5Demo"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Demo from "./Demo.vue";
  import Button1Demo from "./Button1Demo.vue";
  import Button2Demo from "./Button2Demo.vue";
  import Button3Demo from "./Button3Demo.vue";
  import Button4Demo from "./Button4Demo.vue";
  import Button5Demo from "./Button5Demo.vue";
  import Button6Demo from "./Button6Demo.vue";

  export default {
    components: {
      Demo
    },
    setup() {
      return {
        Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo, Button6Demo
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "src/style/componentDemo";
</style>