<template>
  <button 
    v-on:click="clickElement($event)" 
    v-click-outside="onClickOutside"
    v-bind:class="[{[setClass]: setClass}, buttonStyle]">
    <slot>
    </slot>
    {{text}}
    <BaseIcon
      v-show="typeIcon"
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

const baseClass = 'dropdown__item';

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
        button_small: this.parent === 'item'
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

        if (this.text) {
          this.changeActivePage(this.text);
        }

        if (button.closest('.inner-content__container')) {
          this.buttonForm(button);
        }
      },

    clickElement: function (e) {
      if (this.customClick) {
        this.customClick();
      } else
      if (!this.isActive) {
        this.setActive(e);
      } else {
        this.setActive(e);
      }
    },

    onClickOutside: function (e) {
      if (this.isActive && e.target.closest('.navigation__item')) {
        this.isActive = !this.isActive;
        this.$el.classList.remove('active');
      }
    },

    changeActivePage(key) {
      this.$emit('setPage', key)
    },

    buttonForm(button) {
      this.$emit('clickInput', button)
    }
  },
}
</script>