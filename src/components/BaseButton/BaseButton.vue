<template>
  <button 
    v-on:click="clickElement($event)" 
    v-click-outside="onClickOutside"
    v-bind:class="[buttonStyle]">
    <slot>
    </slot>
    {{text}}
    <BaseIcon
      v-if="typeIcon"
      v-bind:type="typeIcon"
      v-bind:iconSize="iconSize"
      v-bind:parent="parent">
    </BaseIcon>
  </button>
</template>

<script>
import Vue from 'vue'
import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

export default {
  props: {
    color: String,
    text: String,
    typeIcon: String,
    iconSize: Object,
    parent: String,
    customClick: Function,
  },
  data() {
      return {
        isActive: false,
      }
  },
  computed: {
    buttonStyle: function() {
      return {
        button_primary: this.color === 'primary',
        button_secondary: this.color === 'secondary',
        button_small: this.parent === 'item' || this.parent === 'next' || this.parent === 'back',
        button_next: this.parent === 'next',
        button_back: this.parent === 'back'
      }
    },
  },
  methods: {
    setActive: function (e) {
      
      this.isActive = !this.isActive;
        let button;
        if (e.target.nodeName === 'BUTTON') {
          button = e.target;
        } else {
          button = e.target.closest('.button_primary') || e.target.closest('.button_secondary');
        }
        
        if (this.isActive) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }

        if (button.closest('.inner-content__container')) {
          this.buttonForm(button);
        }
      },

    clickElement: function (e) {
      if (this.customClick) {
        this.customClick(e);
      } else
      if (!this.isActive) {
        this.setActive(e);
      } else {
        this.setActive(e);
      }
    },

    onClickOutside: function (e) {
      if (this.isActive && e.target.closest('.navigation__item') || this.isActive && e.target.closest('.pagination__item')) {
        this.isActive = !this.isActive;
        this.$el.classList.remove('active');
      }
    },

    buttonForm(button) {
      this.$emit('clickInput', button)
    }
  },
}
</script>

<style src="./style.scss"></style>