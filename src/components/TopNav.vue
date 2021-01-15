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
  </div>
</template>

<script lang="ts">

  export default {};
</script>

<style lang="scss" scoped>

  .topnav {
    display: flex;
    justify-content: space-between;
    padding: 28px 32px;


    .logo {
      margin-right: auto;
    }

    ul {
      display: flex;

      .menu1 {
        margin-right: 32px;
      }
    }
  }


  @media (max-width: 500px) {
    .topnav {
      padding: 16px 16px;

      ul {

        .menu1 {
          margin-right: 16px;
        }
      }
    }
  }
</style>