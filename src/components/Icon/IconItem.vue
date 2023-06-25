<template>
  <div class="navigation__icon">
    <svg>
      <use v-bind:href="`#${this.type}`" v-bind:xlink:href="`#${this.type}`"></use>
    </svg>
  </div>
</template>

<script>
import '@/js/register.js';

export default {
  props: {
    type: String
  },
  data() {
      return {
        arrow: '#drop_down',
        dotts: '#dots',
      }
  },
}
</script>

<style src="@/css/base.scss"></style>
<style src="@/components/Navigation/style.scss"></style>