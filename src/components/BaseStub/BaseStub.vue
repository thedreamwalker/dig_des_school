<template>
  <div class="stub__container">
    <h2>{{setText(type).title}}</h2>
    <p>{{setText(type).text}}</p>
    <div class="router__wrapper">
      <router-link v-bind:to="setText(type).link" v-bind:class="'button_primary'">{{setText(type).link_text}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  },
  
  methods: {
    setText(type) {
      switch (type) {
        case 'project':
          return {title: '', text: 'Не создан ни один проект', link: '/projects/create', link_text: 'Добавить проект'};
        case 'task':
          return {title: '', text: 'Не создана ни одна задача', link: '/tasks/create', link_text: 'Добавить задачу'};
        default:
          return {title: 'Ошибка 404', text: 'Данной страницы не существует', link: '/projects', link_text: 'Вернуться на основную страницу'};
      }
    }
  }
}
</script>

<style src="./style.scss"></style>