<template>
  <div v-bind:class="activeClass(parent)">
    <svg v-bind:style="svgStyle">
      <use v-bind:href="`#${type}`" v-bind:xlink:href="`#${type}`"></use>
    </svg>
  </div>
</template>

<script>
import '@/js/register.js';

export default {
  props: {
    type: String,
    iconSize: Object,
    parent: String
  },
  
  computed: {
    svgStyle: function() {
      return this.iconSize ? this.iconSize : {width: '24px', height: '24px'}
    }
  },

  methods: {
    activeClass: (parent) => {
      return `${parent}__icon`
      // switch (parent) {
      //   case 'navigation':
      //     return 'navigation__icon';
      //   case 'item':
      //     return 'button__icon';
      //   case 'form': {
      //     return 'form__icon';
      //   }
      // }
    }
  }
}
</script>