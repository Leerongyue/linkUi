<template>
  <div class="link-section-wrapper">
    <h1>Icon 示例</h1>
    <div class="link-section-component">
      <h3><span>#</span> 基础用法</h3>
      <h4>
        基于<span>Iconfont</span>的开源<span>svg</span>图标组件
      </h4>
      <h4>
        <span>1.</span>在Iconfont上创建自己的图标项目,获取<span>font-class</span>
      </h4>
      <h4>
        <span>2.</span>将font-class赋值给Icon组件的<span>name属性</span>
      </h4>
      <Demo :component="IconDemo1"/>
    </div>
  </div>
</template>

<script>
  import Demo from "./Demo.vue";
  import IconDemo1 from "./IconDemo1.vue";

  export default {
    components: {
      Demo
    },
    setup() {
      return {
        IconDemo1
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "src/style/componentDemo";
</style>