<demo>
  @blur:function
</demo>
<template>
  <div>
    <Input v-model:value="content" placeholder="支持blur事件" @blur="onBlur"></Input>
    <Dialog v-model:visible="showDialog" :ok="f1">
      <template v-slot:title>
        <span>@blur</span>
      </template>
      <template v-slot:content>
        <span>失去焦点了!</span>
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
      const onBlur = () => {
        showDialog.value = true;
      };
      const f1 = () => {
        return true;
      };
      return {
        content, f1, onBlur, showDialog
      };
    }
  };
</script>