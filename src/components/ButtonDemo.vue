<template>
  <div>
    <div>
      <div>支持样式</div>
      <Button>你好</Button>
      <Button theme="button">你好</Button>
      <Button theme="link">你好</Button>
      <Button theme="text">你好</Button>
    </div>
    <div>
      <div>支持字体</div>
      <Button size="big">大大大</Button>
      <Button>普普通</Button>
      <Button size="small">小小小</Button>
      <div>
        <Button theme="link" size="big">大大大</Button>
        <Button theme="link">普普通</Button>
        <Button theme="link" size="small">小小小</Button>
      </div>
      <div>
        <Button theme="text" size="big">大大大</Button>
        <Button theme="text">普普通</Button>
        <Button theme="text" size="small">小小小</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    name: 'ButtonDemo',
    components: {
      Button
    },
    setup() {
      const onClick = () => {
        console.log(1);
      };
      return {onClick};
    }
  };
</script>

<style scoped>

</style>