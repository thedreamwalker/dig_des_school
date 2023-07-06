<template>
    <button
  v-on:click="clickElement($event)"
  v-click-outside="onClickOutside"
  v-bind:class="buttonStyle">
    <slot>
    </slot>
    {{ text }}
    <BaseIcon 
      v-show="typeIcon"
      v-bind:type="typeIcon"
      v-bind:iconSize="iconSize"
      v-bind:parent="parent">
    </BaseIcon>
    <ul v-show="isActive" class="dropdown__list">
      <li v-for="item in list" v-bind:key="item.name">
        <router-link v-bind:to="item.link" v-bind:class="item.subClass">{{ item.name }}</router-link>
      </li>
    </ul>
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
    list: Array,
    typeIcon: String,
    iconSize: Object,
    parent: String
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
        button_small: this.parent === 'item',
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
    },

    clickElement: function (e) {

      if (!this.isActive) {
        this.setActive(e);
      } else if (!e.target.closest('.dropdown__list')) {
        this.setActive(e);
      }
    },

    onClickOutside: function (e) {
      if (this.isActive && (!e.target.closest('.dropdown__item'))) {
        this.isActive = !this.isActive;
        this.$el.classList.remove('active');
      }
    },

    changeActivePage(key) {
      this.$emit('setPage', key)
    }
  },
}
</script>