<template>
  <div class="topnav">
    <router-link to="/home">
      <Icon name="icon-topLogo"/>
    </router-link>
    <ul>
      <li class="menu">
        <router-link to="/doc/intro">文档</router-link>
      </li>
    </ul>
    <div class="switch" @click="toggleMenu" v-if="path!=='/home'">
      <transition name="slide-fade" mode="out-in">
        <svg key="more" class="icon" v-if="!asideVisible">
          <use xlink:href="#icon-more"></use>
        </svg>
        <svg key="delete" class="icon" v-else>
          <use xlink:href="#icon-delete"></use>
        </svg>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
  import {inject, Ref, onMounted} from "vue";
  import {useRoute} from "vue-router";
  import Icon from "../lib/Icon.vue";

  export default {
    components: {Icon},
    setup() {
      const asideVisible = inject<Ref<boolean>>("asideVisible");
      const toggleMenu = () => {
        asideVisible.value = !asideVisible.value;
      };
      const path = useRoute().path;
      return {toggleMenu, asideVisible, path};
    }
  };
</script>

<style lang="scss" scoped>
  @import "src/style/helper";

  .topnav {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 5px 8px -5px #d4d4d4;
    z-index: 10;
    background: white;

    a {
      margin: 0 auto;

      svg {
        width: 32px;
        height: 32px
      }
    }

    ul {
      display: none;
    }

    .switch {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);

      svg {
        width: 32px;
        height: 32px;
      }
    }

    .slide-fade-enter-active {
      transition: all .3s ease;
    }

    .slide-fade-leave-active {
      transition: all .3s ease;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
      transform: rotateX(90deg);
    }
  }


  @media (min-width: 500px) {
    .topnav {
      display: flex;
      padding: 24px 32px;
      z-index: 3;

      a {
        margin: 0;
      }

      ul {
        display: flex;
        align-items: center;
      }

      .switch {
        display: none;
      }
    }
  }
</style>