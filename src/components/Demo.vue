<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Button from "../lib/Button.vue";
  import "prismjs";
  import "prismjs/themes/prism.css";
  import {computed, ref} from "vue";

  const Prism = (window as any).Prism;

  export default {
    props: {
      component: Object
    },
    components: {
      Button,
    },
    setup(props) {
      const html = computed(() => {
        return Prism.highlight(props.component.__sourceCode, Prism.languages.html, "html");
      });
      const codeVisible = ref(false);
      const showCode = () => {
        codeVisible.value = true;
      };
      const hideCode = () => {
        codeVisible.value = false;
      };
      return {
        Prism,
        html,
        codeVisible,
        showCode,
        hideCode
      };
    }
  };
</script>

<style scoped lang="scss">
  @import "src/style/helper";

  $radius: 4px;
  .demo {
    border: 1px solid;
    border-radius: $radius;
    margin: 16px 0 32px;

    @media (min-width: 500px) {
      display: inline-block;
      min-width: 450px;
    }

    > h2 {
      font-size: 20px;
      padding: 8px 16px;
      border-bottom: 1px solid;
    }

    &-component {
      padding: 16px;
    }

    &-actions {
      padding: 8px 16px;
    }

    &-code {
      padding: 8px 0;
      border-top: 1px dashed;
      transition: all 0.5s ease;

      > pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }
  }
</style>