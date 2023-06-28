<template>
  <div v-bind:class="activeClass(this.type)">
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
  methods: {
    activeClass: (type) => {
      return type === 'drop_down' ? 'navigation__icon' : 'button__icon';}
  }
}

</script>

<style src="@/css/base.scss"></style>
<style src="@/components/BaseNavigation/style.scss"></style>