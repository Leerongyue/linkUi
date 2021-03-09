<template>
  <div class="link-section-wrapper">
    <h1>BackToTop 示例</h1>
    <div class="link-section-component">
      <h3><span>#</span> 基础用法</h3>
      <Demo :component="BackToTopDemo1"/>
    </div>
    <h1>API</h1>
    <table class="link-section-table">
      <thead>
      <tr>
        <td>参数</td>
        <td>说明</td>
        <td>类型</td>
        <td>默认值</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>target</td>
        <td>绑定滚动事件的对象</td>
        <td>HTMLElement</td>
        <td>document | window</td>
      </tr>
      <tr>
        <td>height</td>
        <td>滚动高度阈值</td>
        <td>number</td>
        <td>300</td>
      </tr>
      <tr>
        <td>duration</td>
        <td>动画持续时间</td>
        <td>number</td>
        <td>250</td>
      </tr>
      <tr>
        <td>onclick</td>
        <td>回到顶部后触发事件</td>
        <td>Function</td>
        <td>-</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import BackToTopDemo1 from "./BackToTopDemo1.vue";
  import Demo from "./Demo.vue";

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