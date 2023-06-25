<template>
  <button v-on:click="clickElement($event)" v-click-outside="onClickOutside" v-bind:class="{ button_primary: isNavigation, navigation__user: isUser }">
    <img v-show="isUser" class="navigation__avatar" src="https://thedreamwalker.github.io/dig_des_school/dist/assets/img/user-item.png" alt="аватар пользователя">
    {{text}}
    <Icon v-show="isUser" v-bind:type="typeIcon"></Icon>
    <DropdownButton v-show="isButtonActive && !isNavigation" v-bind:list="listDropdownButton"></DropdownButton>
    </button>
</template>

<script>
import Vue from 'vue'
import Icon from '@/components/Icon/IconItem.vue'
import DropdownButton from '@/components/DropdownButton/DropdownButton.vue'
import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

export default {
  props: {
    isNavigation: Boolean,
    isUser: Boolean,
    typeIcon: String,
    text: String
  },
  data() {
      return {
        isButtonActive: false,
        list: ['Проекты', 'Задачи', 'Пользователи'],
        listDropdownButton: ['Профиль', 'Выход'],
      }
  },
  components: {
    Icon,
    DropdownButton, 
  }, 
  methods: {
    clickElement: function (e) {
      if (!e.target.closest('.dropdown__list')) {
        this.isButtonActive = !this.isButtonActive;
        let button;
        if (e.target.parentElement.classList.contains('navigation__item')) {
          button = e.target;
        } else {
          button = e.target.closest('.navigation__user' || '.navigation__item');
        }
        
        if (this.isButtonActive) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      }
    },
    onClickOutside: function (e) {
      if (this.$el.classList.contains('active') && (this.$el.classList.contains('navigation__user') || 
      this.$el.parentElement.classList.contains('navigation__item') && e.target.parentElement.classList.contains('navigation__item') && e.target !== this.$el)) {
        this.isButtonActive = !this.isButtonActive;
        this.$el.classList.remove('active');
      }
    }
  }
}

//document.addEventListener('click', function (e) { console.log(this.isButtonActive)});

</script>

<style src="@/css/base.scss"></style>
<style src="@/components/Navigation/style.scss"></style>