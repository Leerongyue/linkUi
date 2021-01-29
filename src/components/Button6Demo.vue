<demo>
  round:boolean
</demo>
<template>
  <Button round>普通</Button>
  <Button level="main" round>主要</Button>
  <Button level="success" round>成功</Button>
  <Button level="warning" round>警告</Button>
  <Button level="danger" round>危险</Button>
</template>

<script lang="ts">
  import Button from "../lib/Button.vue";

  export default {
    components: {
      Button
    }
  };
</script>

<style scoped>

</style>