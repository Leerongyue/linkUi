<demo>
  一键打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang="ts">
  import {openDialog} from "../lib/openDialog";
  import Button from "../lib/Button.vue";

  export default {
    components: {
      Button
    },
    setup() {
      const showDialog = () => {
        openDialog({
          title: "标题",
          content: "你好",
          ok() {console.log("ok");},
          cancel() {console.log("cancel");},
          closeOnClickOverlay: false
        });
      };
      return {showDialog};
    }
  };
</script>

<style scoped>

</style>