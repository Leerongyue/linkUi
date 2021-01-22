<template>
  <div class="topnav">
    <router-link to="/home">
      <svg class="icon">
        <use xlink:href="#icon-apple"></use>
      </svg>
    </router-link>
    <ul>
      <li class="menu">
        <router-link to="/">菜单1</router-link>
      </li>
      <li>
        <router-link to="/doc">菜单2</router-link>
      </li>
    </ul>
    <div class="switch" @click="toggleMenu">x</div>
  </div>
</template>

<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      const toggleMenu = () => {
        asideVisible.value = !asideVisible.value;
      };
      return {toggleMenu};
    }
  };
</script>

<style lang="scss" scoped>
  .topnav {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    position: relative;
    box-shadow: 0 5px 8px -5px #d4d4d4;

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