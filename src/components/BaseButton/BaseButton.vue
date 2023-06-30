<template>
  <button 
    v-on:click="clickElement($event)" 
    v-click-outside="onClickOutside" 
    v-bind:class="[{[dropdownItemStyle]: isDropdownItem}, buttonStyle]">
    <img class="navigation__avatar" 
      v-show="isUser" 
      src="@/assets/img/user-item.png" 
      alt="аватар пользователя">
    {{text}}
    <BaseIcon 
      v-show="isIcon" 
      v-bind:type="svg"
      v-bind:iconSize="iconSize"></BaseIcon>
      <BaseDropdown 
        v-show="isButtonActive && isDropdown" 
        v-bind:list="constentList"
        v-on:forDrop="changeActivePage($event)">
      </BaseDropdown>
    </button>
</template>

<script>
import Vue from 'vue'
import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

export default {
  props: {
    isPrimary: Boolean,
    isSecondary: Boolean,
    isNavigation: Boolean,
    isUser: Boolean,
    isItem: Boolean,
    isIcon: Boolean,
    isDropdown: Boolean,
    isDropdownItem: Boolean,
    dropdownItemStyle: Array,
    iconSize: Object,
    text: String,
    constentList: Array,
  },
  data() {
      return {
        isButtonActive: false,
      }
  },
  computed: {
    buttonStyle: function() {
      return {
        button_primary: this.isPrimary, 
        navigation__user: this.isUser, 
        button_secondary: this.isSecondary, 
        button_small: this.isItem,
        dropdown__button: this.isDropdown,
      }
    },
    svg: function () {
      if (this.isUser) {
        return 'drop_down'
      } else if (this.isItem) {
        return 'dots'
      }
      return undefined;
    }
  },
  methods: {
    setActive: function (e) {
      this.isButtonActive = !this.isButtonActive;
        let button;
        if (e.target.nodeName === 'BUTTON') {
          button = e.target;
        } else {
          button = e.target.closest('.navigation__user') || e.target.closest('.button_small');
        }
        
        if (this.isButtonActive) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      },

    clickElement: function (e) {
      if (!e.target.classList.contains('active') && (this.isNavigation || this.isDropdownItem)) {
        this.setActive(e);
        this.changeActivePage(this.text);
      } else if (this.isDropdown && !e.target.closest('.dropdown__list') && !e.target.closest('.dropdown__item')) {
        this.setActive(e);
      }
    },

    onClickOutside: function (e) {
      if (this.isButtonActive && (this.isDropdown || !e.target.closest('.dropdown__item') || e.target.closest('.navigation__item'))) {
        this.isButtonActive = !this.isButtonActive;
        this.$el.classList.remove('active');
      }
    },

    changeActivePage(key) {
      this.$emit('setPage', key)
    }
  },
}
</script>

<style src="@/css/base.scss"></style>
<style src="@/components/BaseNavigation/style.scss"></style>