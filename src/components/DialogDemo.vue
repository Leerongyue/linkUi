<template>
  <div class="link-section-wrapper">
    <h1>Dialog 示例</h1>
    <div class="link-section-component">
      <h3><span>#</span> 基础用法</h3>
      <h4>
        使用<span>v-model</span>绑定一个 <span>Boolean</span>类型的变量
      </h4>
      <Demo :component="Dialog1Demo"/>
    </div>
    <div class="link-section-component">
      <h3><span>#</span> 利用TS一键打开Dialog</h3>
      <h4>
        引入<span>openDialog</span>模块创建一个Dialog组件
      </h4>
      <Demo :component="Dialog2Demo"/>
    </div>
  </div>


</template>

<script lang="ts">
  import Demo from "./Demo.vue";
  import Dialog1Demo from "./Dialog1Demo.vue";
  import Dialog2Demo from "./Dialog2Demo.vue";

  export default {
    components: {
      Demo
    },
    setup() {
      return {
        Dialog1Demo,
        Dialog2Demo
      };
    }

  };
</script>

<style lang="scss" scoped>
  .link-section-wrapper {
    .link-section-component {
      h3 {
        padding: 8px 0;

        span {
          color: red;
          font-weight: bold;
        }
      }

      h4 {
        span {
          font-weight: bold;
          color: red;
        }
      }
    }
  }
</style>