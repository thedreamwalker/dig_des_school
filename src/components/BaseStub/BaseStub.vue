<template>
  <div class="stub__container">
    <p>{{setText(type)}}</p>
    <button class="button_primary">Добавить</button>
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
          return 'Не создан ни один проект';
        case 'task':
          return 'Не создана ни одна задача';
        default:
          return 'В данном разделе ничего нет';
      }
    }
  }
}
</script>

<style src="./style.scss"></style>