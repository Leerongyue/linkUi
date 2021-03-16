<demo>
  showDialog:boolean
</demo>
<template>
  <div>
    <Button level="main" @click="toggle">点击打开</Button>
    <Dialog v-model:visible="showDialog" :ok="f1" :cancel="f2">
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
      <template v-slot:content>
        <div>内容1</div>
        <div>内容2</div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
  import {ref} from "vue";
  import Button from "../lib/Button.vue";
  import Dialog from "../lib/Dialog.vue";

  export default {
    components: {
      Button, Dialog
    },
    setup() {
      const showDialog = ref(false);
      const toggle = () => {
        showDialog.value = !showDialog.value;
      };
      const f1 = () => {
        return true;
      };
      const f2 = () => {};
      return {showDialog, toggle, f1, f2};
    }
  };
</script>