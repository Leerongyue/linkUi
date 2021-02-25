<template>
  <div class="link-section-wrapper">
    <h1>Input 示例</h1>
    <h3>注:type、placeholder属性与原生input相同</h3>
    <div class="link-section-component">
      <h3><span>#</span> 基础用法</h3>
      <h4>
        使用<span>v-model</span>绑定一个<span>string</span>类型的值
      </h4>
      <Demo :component="InputDemo1"/>
    </div>
    <div class="link-section-component">
      <h3><span>#</span> 支持圆角</h3>
      <h4>
        绑定<span>round</span>属性以支持<span>圆角</span>效果
      </h4>
      <Demo :component="InputDemo2"/>
    </div>
    <div class="link-section-component">
      <h3><span>#</span> 支持disabled</h3>
      <h4>
        绑定<span>disabled</span>属性来<span>禁用</span>输入框
      </h4>
      <Demo :component="InputDemo3"/>
    </div>
    <div class="link-section-component">
      <h3><span>#</span> 支持focus事件</h3>
      <h4>
        绑定<span>focus</span>事件函数
      </h4>
      <Demo :component="InputDemo4"/>
    </div>
    <div class="link-section-component">
      <h3><span>#</span> 支持blur事件</h3>
      <h4>
        绑定<span>blur</span>事件函数
      </h4>
      <Demo :component="InputDemo5"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Demo from "./Demo.vue";
  import InputDemo1 from "./InputDemo1.vue";
  import InputDemo2 from "./InputDemo2.vue";
  import InputDemo3 from "./InputDemo3.vue";
  import InputDemo4 from "./InputDemo4.vue";
  import InputDemo5 from "./InputDemo5.vue";

  export default {
    components: {
      Demo
    },
    setup() {
      return {
        InputDemo1,
        InputDemo2,
        InputDemo3,
        InputDemo4,
        InputDemo5
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "src/style/componentDemo";
</style>