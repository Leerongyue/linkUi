<template>
  <button class="link-button-wrapper" :class='classes' :disabled="disabled">
    <span class="link-button-loadingIndicator" v-if="loading"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
  import {computed} from "vue";

  export default {
    props: {
      theme: {
        type: String,
        default: "button"
      },
      size: {
        type: String,
        default: "normal"
      },
      level: {
        type: String,
        default: "normal"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const {theme, size, level, round} = props;
      const classes = computed(() => {
        return {
          [`link-button-theme-${theme}`]: theme,
          [`link-button-size-${size}`]: size,
          [`link-button-level-${level}`]: level,
          [`link-button-round`]: round,
        };
      });
      return {classes};
    }
  };
</script>

<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $green: rgb(19, 206, 102);
  $yellow: rgb(255, 193, 7);
  $radius: 4px;
  $red: red;
  $grey: grey;

  .link-button-wrapper {
    padding: 3px 20px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: all 500ms;
    margin-right: 8px;
    margin-top: 16px;

    &:hover, &:focus {
      color: $blue;
      border-color: $blue;
    }

    &:focus {
      outline: none;
    }

    //适配firefox
    &::-moz-focus-inner {
      border: 0;
    }

    &.link-button-theme-link {
      border-color: transparent;
      box-shadow: none;
      color: $blue;

      &:hover, &:focus {
        color: lighten($blue, 10%)
      }
    }

    &.link-button-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;

      &:hover, &:focus {
        background: darken(white, 5%);
      }
    }

    &.link-button-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px;
    }

    &.link-button-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }

    &.link-button-theme-button {
      &.link-button-round {
        border-radius: 24px;
        color: black;
      }

      &.link-button-level-main {
        background: $blue;
        color: white;
        border-color: $blue;

        &.link-button-round {
          border-radius: 24px;
          color: white;
        }

        &:hover,
        &:focus {
          background: darken($blue, 10%);
          border-color: darken($blue, 10%);
        }
      }

      &.link-button-level-success {
        background: $green;
        color: white;
        border-color: $green;

        &.link-button-round {
          border-radius: 24px;
          color: white;
        }

        &:hover,
        &:focus {
          background: darken($green, 10%);
          border-color: darken($green, 10%);
        }
      }

      &.link-button-level-warning {
        background: $yellow;
        color: white;
        border-color: $yellow;

        &.link-button-round {
          border-radius: 24px;
          color: white;
        }

        &:hover,
        &:focus {
          background: darken($yellow, 10%);
          border-color: darken($yellow, 10%);
        }
      }

      &.link-button-level-danger {
        background: $red;
        border-color: $red;
        color: white;

        &.link-button-round {
          border-radius: 24px;
          color: white;
        }

        &:hover,
        &:focus {
          background: darken($red, 10%);
          border-color: darken($red, 10%);
        }
      }
    }

    &.link-button-theme-link {
      &.link-button-level-danger {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }

      &.link-button-level-success {
        color: $green;

        &:hover,
        &:focus {
          color: darken($green, 10%);
        }
      }

      &.link-button-level-warning {
        color: $yellow;

        &:hover,
        &:focus {
          color: darken($yellow, 10%);
        }
      }
    }


    &.link-button-theme-text {
      &.link-button-level-main {
        color: $blue;

        &:hover,
        &:focus {
          color: darken($blue, 10%);
        }
      }

      &.link-button-level-danger {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }

      &.link-button-level-success {
        color: $green;

        &:hover,
        &:focus {
          color: darken($green, 10%);
        }
      }

      &.link-button-level-warning {
        color: $yellow;

        &:hover,
        &:focus {
          color: darken($yellow, 10%);
        }
      }
    }

    &.link-button-theme-button {
      &[disabled] {
        &:hover {
          transform: none;
        }

        cursor: not-allowed;
        color: $grey;

        &:hover {
          border-color: $grey;
        }
      }
    }

    &.link-button-theme-link, &.link-button-theme-text {
      &[disabled] {
        &:hover {
          transform: none;
        }

        cursor: not-allowed;
        color: $grey;
      }
    }

    .link-button-loadingIndicator {
      display: inline-block;
      width: 14px;
      height: 14px;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $blue $blue $blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: link-button-spin 1s infinite linear;
    }


  }

  @keyframes link-button-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }

  }
</style>