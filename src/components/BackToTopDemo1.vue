<demo>
  滚动页面出现BackToTop
</demo>

<template>
  <BackToTop :target="target" :onclick="onclick"/>
  <Dialog v-model:visible="showDialog" :ok="f1">
    <template v-slot:title>
      BackToTop组件
    </template>
    <template v-slot:content>
      回到顶部了!
    </template>
  </Dialog>
</template>
<script lang="ts">
  import BackToTop from "../lib/BackToTop.vue";
  import Dialog from "../lib/Dialog.vue";
  import {ref} from "vue";

  export default {
    components: {
      Dialog,
      BackToTop,
    },
    setup() {
      const showDialog = ref(false);
      const target = () => document.getElementById("scrollContainer");
      const onclick = () => {
        showDialog.value = true;
      };
      const f1 = () => {};
      return {target, onclick, showDialog, f1};
    },
  };
</script>