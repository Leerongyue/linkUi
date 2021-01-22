<template>
  <div class="home">
    <TopNav/>
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>基于Vue3.0的UI框架</h2>
      <p class="actions">
        <a href="https://baidu.com">Github</a>
        <router-link to="/doc/intro">开始</router-link>
      </p>
    </div>
    <div class="intro">
      <svg class="icon">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-light"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
  import TopNav from "../components/TopNav.vue";

  export default {
    components: {
      TopNav
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    .banner {
      color: rgb(68, 41, 91);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 80px 0 160px 0;
      clip-path: ellipse(80% 60% at 50% 20%);
      background: linear-gradient(
          145deg,
          #e8cbc0,
          #636fa4
      );

      h2 {
        padding: 16px 0 32px 0;
      }

      p {
        a {
          color: white;
          background: rgb(99, 111, 164);
          margin: 0 8px;
          border-radius: 16px;
          padding: 4px 12px;
        }
      }
    }

    .intro {
      svg {
        width: 64px;
        height: 64px;
      }
    }
  }
</style>