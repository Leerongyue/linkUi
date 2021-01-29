<demo>
  level:'normal' / 'main' / 'success' / 'warning' / 'danger'
</demo>
<template>
  <Button>普通</Button>
  <Button level="main">主要</Button>
  <Button level="success">成功</Button>
  <Button level="warning">警告</Button>
  <Button level="danger">危险</Button>
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