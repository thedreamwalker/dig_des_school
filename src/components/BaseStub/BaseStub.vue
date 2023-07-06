<template>
  <div class="stub__container">
    <p>{{text}}</p>
    <button class="button_primary">{{ textButton }}</button>
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
    }
  },
}
</script>

<style src="./style.scss"></style>