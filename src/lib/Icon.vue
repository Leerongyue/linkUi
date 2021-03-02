<template>
  <div class="link-icon">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="'#'+name"></use>
    </svg>
  </div>
</template>

<script lang="ts">

  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
    },
  };
</script>

<style lang="scss">
  .link-icon {
    display: inline-block;

    & + & {
      margin-left: 1em;
      margin-top: 2em;
    }

    .icon {
      width: 1.5em;
      height: 1.5em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
</style>