<template>
  <div class="stub__container">
    <h2 v-if="title">{{ title }}</h2>
    <p>{{ text }}</p>
    <div class="router__wrapper">
      <router-link v-bind:to="{name: linkButton}" v-bind:class="'button_primary'">{{ textButton }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Данной страницы не существует'
    },
    textButton: {
      type: String,
      default: 'Вернуться на главную страницу'
    },
    linkButton: {
      type: String,
      default: 'ProjectsPage'
    },
    title: {
      type: String
    }
  },
}
</script>

<style src="./style.scss"></style>