<template>
  <div class="home">
    <div class="banner">
      <h1>LinkUI</h1>
      <h2>基于Vue3.0的UI框架</h2>
      <div>
        <a href="https://github.com/Leerongyue/linkUi">GITHUB</a>
        <router-link to="/doc/intro">开始</router-link>
      </div>
    </div>
    <div class="intro">
      <div class="unit">
        <Icon name="icon-Vue" style="margin-left: 16px"/>
        <div class="text">
          <h3>基于Vue3</h3>
          <span>使用了Vue3 Composition API</span>
        </div>
      </div>
      <div class="unit">
        <Icon name="icon-ts"/>
        <div class="text">
          <h3>基于TypeScript</h3>
          <span>源代码采用TypeScript书写</span>
        </div>
      </div>
      <div class="unit">
        <Icon name="icon-light"/>
        <div class="text">
          <h3>代码易读</h3>
          <span>给个组件的代码都极其简洁</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import TopNav from "../components/TopNav.vue";
  import Icon from "../lib/Icon.vue";

  export default {
    components: {
      Icon,
      TopNav
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;

    .banner {
      color: rgb(68, 41, 91);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 64px 0 72px 0;
      background: linear-gradient(
          145deg,
          #e8cbc0,
          #636fa4);

      div {
        margin-top: 12px;

        a {
          vertical-align: middle;
          color: white;
          background: rgb(99, 111, 164);
          margin: 0 8px;
          border-radius: 16px;
          padding: 8px 16px;
        }
      }

      h2 {
        margin: 8px 0;
      }

    }

    .intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 32px;

      .unit {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        span {
          font-size: 14px;
        }

        h3 {
          font-weight: bold;
        }

        ::v-deep svg {
          width: 3em;
          height: 3em;
          margin-right: 16px;
        }

        .text {
          width: 100%;
          color: rgb(111, 72, 107);
          display: flex;
          flex-direction: column;
        }
      }
    }

    @media (min-width: 600px) and (max-width: 950px) {
      .intro {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 24px;
      }
    }
    @media (min-width: 950px) {
      .banner {
        padding: 64px 0 128px 0;
      }
      .intro {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }
</style>