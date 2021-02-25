<demo>
  round:boolean
</demo>
<template>
  <div>
    <Input v-model:value="content" round placeholder="支持圆角"/>
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