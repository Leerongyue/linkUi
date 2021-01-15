<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul>
      <li class="menu1">
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
  import {inject, Ref} from "vue";

  export default {
    setup() {
      const asideVisible = inject<Ref<boolean>>("asideVisible");
      const toggleMenu = () => {
        asideVisible.value = !asideVisible.value;
      };
      return {toggleMenu};
    }
  };
</script>

<style lang="scss" scoped>
  .topnav {
    background: pink;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    position: relative;

    .logo {
      margin: 0 auto;
    }

    ul {
      display: none;

    }

    .switch {
      width: 32px;
      height: 32px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      background: #000;
    }
  }


  @media (min-width: 500px) {
    .topnav {
      display: flex;
      padding: 28px 32px;

      .logo {
        margin: 0;
      }

      ul {
        display: flex;

        .menu1 {
          margin-right: 32px;
        }
      }

      .switch {
        display: none;
      }
    }
  }
</style>