<template>
  <div v-bind:class="activeClass(svgIcon)">
    <svg v-bind:style="svgStyle">
      <use v-bind:href="`#${svgIcon}`" v-bind:xlink:href="`#${svgIcon}`"></use>
    </svg>
  </div>
</template>

<script>
import '@/js/register.js';

export default {
  props: {
    type: String,
    iconSize: Object
  },
  computed: {
    svgIcon: function() {
      return this.type ? this.type : 'drop_down';
    },

    svgStyle: function() {
      const defaultSize = this.type === 'dots' ? {width: '4px', height: '14px'} : {width: '24px;', height: '24px;'};
      return this.iconSize ? this.iconSize : defaultSize
    }
  },
  methods: {
    activeClass: (type) => {
      return type === 'drop_down' ? 'navigation__icon' : 'button__icon';}
  }
}
</script>

<style src="@/css/base.scss"></style>
<style src="@/components/BaseNavigation/style.scss"></style>