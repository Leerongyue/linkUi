<template>
  <button class="link-switch" :class="{'link-switch-checked':value}" @click="toggle">
    <span class="link-switch-span"></span>
    <p class="link-switch-on" v-if="value">on</p>
    <p class="link-switch-off" v-else>off</p>
  </button>
</template>

<script lang="ts">

  export default {
    props: {
      value: Boolean
    },
    setup(props, context) {
      const toggle = () => {
        context.emit("update:value", !props.value);
      };
      return {toggle};
    }
  };
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .link-switch {
    height: $h;
    width: $h*2;
    font: inherit;
    border: none;
    background: none;
    background: rgb(191, 191, 191);
    border-radius: $h/2;
    position: relative;
    margin-top: 16px;

    &:focus {
      outline: none;
    }

    .link-switch-span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h2/2;
      transition: all 0.25s ease-in-out;
    }

    .link-switch-on, .link-switch-off {
      color: white;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .link-switch-off {
      right: 4px;
    }

    .link-switch-on {
      left: 4px;
    }

    &:active {
      > span {
        width: $h+2px;
      }
    }

    &.link-switch-checked {
      background: rgb(24, 144, 255);

      span {
        left: calc(100% - #{$h2} - 2px);
      }

      &:active {
        > span {
          width: $h + 2px;
          margin-left: -6px;
        }
      }
    }
  }
</style>