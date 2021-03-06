<template>
  <div class="doc">
    <TopNav/>
    <div class="content" id="scrollContainer">
      <transition name="slide-fade">
        <aside v-if="asideVisible">
          <h2>快速上手</h2>
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
            <li v-for="item in routerArr" :key="item.to">
              <router-link :to="item.to">{{item.text}}</router-link>
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
  import {inject, Ref, onMounted} from "vue";
  import {router} from "../router";

  export default {
    components: {
      TopNav
    },
    setup() {
      const asideVisible = inject<Ref<boolean>>("asideVisible");
      const routerArr = [
        {to: "/doc/switch", text: "Switch 开关"},
        {to: "/doc/button", text: "Button 按钮"},
        {to: "/doc/dialog", text: "Dialog 对话"},
        {to: "/doc/tabs", text: "Tabs 导航"},
        {to: "/doc/icon", text: "Icon 图标"},
        {to: "/doc/input", text: "Input 输入框"},
        {to: "/doc/backToTop", text: "BackToTop 置顶"},
      ];
      const width = inject<number>("width");
      router.afterEach(() => {
        if (width <= 500) {
          asideVisible.value = false;
        }
      });
      return {asideVisible, routerArr};
    },
  };
</script>

<style lang="scss" scoped>
  @import "src/style/helper";

  $deepbgc: #c67085;
  $bg: rgb(255, 249, 249);
  .doc {
    display: flex;
    flex-direction: column;
    height: 100%;

    .content {
      flex-grow: 1;
      overflow: auto;

      aside {
        position: fixed;
        width: 60%;
        height: 100%;
        left: 0;
        top: 0;
        padding-top: 48px;
        background: white;
        box-shadow: 5px 0 10px -5px #d4d4d4;
        z-index: 2;
        overflow: auto;
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar {
          display: none;
        }

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
              padding: 8px 0 8px 40px;

              &:hover {
                background: darken($bg, 2%);
              }

              &.router-link-active {
                background: darken($bg, 2%);
                border-right: 3px solid $deepbgc;
                position: relative;
                @media (min-width: 500px) {
                  border-right: none;
                  &::after {
                    content: "";
                    display: block;
                    animation: bdrolate 0.8s;
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 3px;
                    height: 40px;
                    background-color: $deepbgc;
                  }
                }
              }
            }
          }
        }

        @media (min-width: 500px) {
          width: 20%;
          padding-top: 100px;
        }
      }

      .pop {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        opacity: 1;

        @media (min-width: 500px) {
          display: none;
        }
      }

      main {
        padding: 60px 10px 20px 10px;

        @media (min-width: 500px) {
          margin-left: 23vw;
          padding-top: 100px;
        }
      }

      @extend %transition
    }

    @keyframes bdrolate {
      0% {
        transform: rotateX(90deg);
      }
      100% {
        transform: rotateX(0deg);
      }
    }
  }
</style>