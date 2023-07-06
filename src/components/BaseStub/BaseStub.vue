<template>
  <div class="stub__container">
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
      default: 'В данном разделе ничего нет'
    },
    textButton: {
      type: String,
      default: 'Добавить'
    },
    linkButton: {
      type: String,
      default: 'ProjectsPage'
    }
  },
}
</script>

<style src="./style.scss"></style>