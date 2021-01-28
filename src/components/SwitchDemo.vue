<template>
  <div class="link-page">
    <h1>Switch组件示例</h1>
    <div class="link-section">
      <h3><span>#</span> 基础用法</h3>
      <p>
        使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量
      </p>
      <Demo :component="Switch1Demo"/>
    </div>
    <div class="link-section">
      <h3><span>#</span> 支持disabled属性</h3>
      <p>
        添加<span>disabled</span>属性来<span>禁用Switch</span>组件
      </p>
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
  $color: rgb(255, 31, 31);
  .link-page {
    .link-section {
      h3 {
        margin: 16px 0 8px 0;

        span {
          color: $color;
        }
      }

      p {
        span {
          color: $color;
        }
      }
    }
  }
</style>