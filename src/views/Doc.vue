<template>
  <div class="doc">
    <TopNav/>
    <div class="content">
      <transition name="slide-fade">
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
      </transition>
      <transition name="slide-fade">
        <div class="pop" v-if="asideVisible" @click="asideVisible=false"></div>
      </transition>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import TopNav from "../components/TopNav.vue";
  import {inject, Ref} from "vue";
  import {router} from "../router";

  export default {
    components: {
      TopNav
    },
    setup() {
      const asideVisible = inject<Ref<boolean>>("asideVisible");
      const width = inject<number>("width");
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
  $bg: rgb(255, 249, 249);
  .router-link-active {
    background: darken($bg, 2%);
  }

  .doc {
    display: flex;
    flex-direction: column;
    height: 100%;

    .content {
      flex-grow: 1;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      padding: 0 16px;

      aside {
        position: fixed;
        width: 60%;
        height: 100%;
        left: 0;
        top: 55px;
        background: white;
        box-shadow: 5px 0 10px -5px #d4d4d4;
        z-index: 2;

        h2 {
          display: inline-block;
          margin: 16px 0;
          padding-left: 32px;
        }

        ol {
          color: rgb(68, 41, 91);
          display: flex;
          flex-direction: column;

          li {
            a {
              display: inline-block;
              width: 100%;
              padding: 8px 0 8px 32px;

              &:hover {
                background: darken($bg, 2%);
              }
            }
          }
        }

        @media (min-width: 500px) {
          width: 20%;
          top: 86px;
        }
      }

      .pop {
        position: fixed;
        left: 0;
        top: 55px;
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
        @media (min-width: 500px) {
          margin-left: 20%;
        }
      }

      /*main {*/
      /*  border: 1px solid red;*/
      /*  height: 100%;*/
      /*  overflow: auto;*/
      /*  -webkit-overflow-scrolling: touch;*/
      /*}*/

      .slide-fade-enter-active {
        transition: all .3s ease;
      }

      .slide-fade-leave-active {
        transition: all .3s ease;
      }

      .slide-fade-enter-from,
      .slide-fade-leave-to {
        transform: translateX(-100%);
      }
    }
  }
</style>