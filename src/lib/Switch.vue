<template>
  <button :class="{checked:value}" @click="toggle">
    <span></span>
    <p class="on" v-if="value">on</p>
    <p class="off" v-else>off</p>
  </button>
</template>

<script lang="ts">

  export default {
    props: {
      value: Boolean
    },
    setup(props, context) {
      const toggle = () => {
        context.emit('update:value', !props.value);
      };
      return {toggle};
    }
  };
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button {
    height: $h;
    width: $h*2;
    border: none;
    background: rgb(191, 191, 191);
    border-radius: $h/2;
    position: relative;

    span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h2/2;
      transition: all 0.25s ease-in-out;
    }

    &:active {
      > span {
        width: $h+2px;
      }
    }

    &.checked {
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


    .on, .off {
      color: white;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .off {
      right: 4px;
    }

    .on {
      left: 4px;
    }

  }
</style>