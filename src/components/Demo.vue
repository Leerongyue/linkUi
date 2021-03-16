<template>
  <div class="demo">
    <h3>
      <span>
         {{component.__sourceCodeTitle}}
      </span>
    </h3>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </div>
    <div :class="'demo-code' + [codeVisible ? ' code-show ' : ' code-hidden ']">
      <pre class="language-html" v-html="html"/>
    </div>

  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue';
  import 'prismjs';
  import 'prismjs/themes/prism.css';
  import {computed, ref, onMounted} from 'vue';
  import {useRoute} from 'vue-router';

  const Prism = (window as any).Prism;

  export default {
    props: {
      component: Object,
    },
    components: {
      Button,
    },
    setup(props) {
      const html = computed(() => {
        return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
      });
      const codeVisible = ref(false);
      onMounted(() => {
        const path = useRoute().path;
        if (path === '/doc/backToTop') {
          codeVisible.value = true;
        }
      });
      const showCode = () => {
        codeVisible.value = true;
      };
      const hideCode = () => {
        codeVisible.value = false;
      };
      return {
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

  $color: rgb(255, 31, 31);
  $radius: 4px;
  .demo {
    border: 1px solid;
    border-radius: $radius;
    margin: 16px 0 32px;

    @media (min-width: 500px) {
      display: block;
      max-width: 500px;
    }

    > h3 {
      font-size: 20px;
      padding: 8px 16px;
      border-bottom: 1px solid;

      span {
        color: rgb(69, 100, 110);
        font-weight: bold;
      }
    }

    > h4 {
      margin: 16px;
    }

    > p {
      span {
        color: $color;
      }
    }

    &-component {
      padding-left: 16px;
    }

    &-actions {
      padding: 16px;

      .link-button-wrapper {
        margin-top: 0;

        &:hover {
          transform: none;
        }
      }
    }

    &-code {
      padding: 8px 0;
      border-top: 1px dashed;
      overflow: auto;

      > pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }

    .code-hidden {
      visibility: hidden;
      transition: all 0.4s cubic-bezier(0.39, 0.7, 0.18, 0.9);
      max-height: 0;
      border: none;
    }

    .code-show {
      max-height: 800px;
      transition: all 1s cubic-bezier(0.39, 0.7, 0.18, 0.9);
    }
  }
</style>