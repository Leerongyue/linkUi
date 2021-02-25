<demo>
  content:string
</demo>
<template>
  <div>
    <Input v-model:value="content" placeholder="基本用法"/>
    <span>{{content}}</span>
  </div>
</template>

<script lang="ts">
  import Input from "../lib/Input.vue";
  import {ref} from "vue";

  export default {
    components: {Input},
    setup() {
      const content = ref("");
      return {
        content
      };
    }
  };
</script>