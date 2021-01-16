<template>
  <div class="doc">
    <TopNav/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/start">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <div class="pop" v-if="asideVisible" @click="asideVisible=false"></div>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import TopNav from '../components/TopNav.vue';
  import {inject, Ref} from 'vue';
  import {router} from '../router';

  export default {
    components: {
      TopNav
    },
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      const width = inject<number>('width');
      router.afterEach(() => {
        if (width <= 500) {
          asideVisible.value = false;
        }
      });
      return {asideVisible};
    },
  };
</script>

<style lang="scss" scoped>
  .doc {
    display: flex;
    flex-direction: column;
    height: 100%;

    .content {
      flex-grow: 1;
      position: relative;
      padding: 0 16px;

      aside {
        position: absolute;
        width: 60%;
        height: 100%;
        left: 0;
        top: 0;
        background: white;
        box-shadow: 5px 0 10px -5px #d4d4d4;
        z-index: 2;
        padding-left: 32px;

        h2 {
          margin: 16px 0;
        }

        ol {
          padding-left: 12px;
          color: rgb(68, 41, 91);

          li {
            padding: 8px 0;
          }
        }

        @media (min-width: 500px) {
          width: 20%;
        }
      }

      .pop {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        background: #f3f3f3;
        opacity: 0.5;
        @media (min-width: 500px) {
          display: none;
        }
      }

      main {
        position: absolute;
        left: 60%;
        top: 0;
      }
    }
  }

</style>