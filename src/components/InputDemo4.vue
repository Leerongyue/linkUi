<demo>
  @focus:function
</demo>
<template>
  <div>
    <Input v-model:value="content" placeholder="支持focus事件" @focus="onFocus"></Input>
    <Dialog v-model:visible="showDialog" :ok="f1">
      <template v-slot:title>
        <span>@focus</span>
      </template>
      <template v-slot:content>
        <span>聚焦了!</span>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
  import Input from "../lib/Input.vue";
  import {ref} from "vue";
  import Dialog from "../lib/Dialog.vue";

  export default {
    components: {Dialog, Input},
    setup() {
      const content = ref("");
      const showDialog = ref(false);
      const onFocus = () => {
        showDialog.value = true;
      };
      const f1 = () => {
        return true;
      };
      return {
        content, onFocus, showDialog, f1
      };
    }
  };
</script>