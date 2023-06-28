<template>
  <button 
    v-on:click="clickElement($event)" 
    v-click-outside="onClickOutside" 
    v-bind:class="{ button_primary: isPrimary, navigation__user: isUser, button_secondary: isSecondary, button_small: isItem}">
    <img class="navigation__avatar" 
      v-show="isUser" 
      
      src="https://thedreamwalker.github.io/dig_des_school/dist/assets/img/user-item.png" 
      alt="аватар пользователя">
    {{text}}
    <BaseIcon 
      v-show="isUser || isItem" 
      v-bind:type="typeIcon"></BaseIcon>
    <BaseDropdown 
      v-show="isButtonActive && isUser" 
      v-bind:list="constentList"></BaseDropdown>
    <BaseDropdown 
      v-show="isButtonActive && isItem" 
      v-bind:list="constentList"></BaseDropdown>
    </button>
</template>

<script>
import Vue from 'vue'
import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

export default {
  props: {
    isNavigation: Boolean,
    isUser: Boolean,
    isPrimary: Boolean,
    isSecondary: Boolean,
    isItem: Boolean,
    typeIcon: String,
    text: String,
    constentList: Array,
    page: Function,
  },
  data() {
      return {
        isButtonActive: false,
      }
  },
  components: {
  }, 
  methods: {
    setActive: function (e) {
      this.isButtonActive = !this.isButtonActive;
        let button;
        if (e.target.parentElement.classList.contains('navigation__item')) {
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
      if (this.isNavigation && !e.target.classList.contains('active')) {
        this.setActive(e);
        this.changePage(this.text);
      } else if (this.isUser && !e.target.closest('.dropdown__list')) {
        this.setActive(e);
      } else if (this.isItem && !e.target.closest('.dropdown__list')) {
        this.setActive(e);
      }
    },

    onClickOutside: function (e) {
      
      if (e.target.parentElement && (this.isButtonActive && !this.$el.parentElement.classList.contains('navigation__item') || this.isButtonActive && e.target.parentElement.classList.contains('navigation__item'))) {
        this.isButtonActive = !this.isButtonActive;
        this.$el.classList.remove('active');
      }
    },

    changePage: function (key) {
      this.$emit('changePage', key);
    },
  },
}
</script>

<style src="@/css/base.scss"></style>
<style src="@/components/BaseNavigation/style.scss"></style>