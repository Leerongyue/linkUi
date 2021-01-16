<template>
  <div class="doc">
    <TopNav/>
    <div class="content">
      <aside v-if="asideVisible">
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
      <div class="pop" v-if="asideVisible"></div>
      <main>主内容</main>
    </div>
  </div>
</template>

<script lang="ts">
  import TopNav from "../components/TopNav.vue";
  import {inject, Ref} from "vue";

  export default {
    components: {
      TopNav
    },
    setup() {
      const asideVisible = inject<Ref<boolean>>("asideVisible");
      return {asideVisible};
    }
  };
</script>

<style lang="scss" scoped>
  /*.doc {*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  height: 100%;*/

  /*  .content {*/
  /*    flex-grow: 1;*/
  /*    flex-basis: 0;*/
  /*    padding: 0 32px;*/
  /*    display: flex;*/
  /*    flex-direction: column;*/
  /*    position: relative;*/

  /*    aside {*/
  /*      position: absolute;*/
  /*      left: 0;*/
  /*      right: 0;*/
  /*      top: 0;*/
  /*      width: 10%;*/
  /*      height: 100%;*/
  /*      z-index: 2;*/

  /*      ol {*/
  /*        li {*/
  /*          padding: 8px 0;*/
  /*        }*/
  /*      }*/
  /*    }*/


  /*  }*/

  /*}*/


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
        width: 50%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 2;

        ol {
          li {

          }
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

      }
    }
  }
</style>