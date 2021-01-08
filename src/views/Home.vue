<template>
  <div class="home">
    <TopNav/>
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>基于Vue3.0的UI框架</h2>
      <p class="actions">
        <a href="https://baidu.com">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import TopNav from '../components/TopNav.vue';

  export default {
    components: {
      TopNav
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    .banner {
      border: 1px solid red;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 120px 0 80px;
      clip-path: ellipse(80% 60% at 50% 40%);
      background: linear-gradient(
          145deg,
          #e8cbc0,
          #636fa4
      )
    }
  }
</style>