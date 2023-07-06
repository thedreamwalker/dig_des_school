<template>
  <div class="item">
    <div class="item__container">
      <div class="item__title">
        <p class="item__name">{{ item.name }}</p>
        <img v-show="itemType === 'task'" class="item__avatar" src="@/assets/img/user-item.jpg" alt="аватар пользователя">
      </div>
      <div class="item__details">
        <p class="item__code"># {{ item.code }}</p>
        <p class="item__author">{{ item.author }}</p>
        <p v-show="itemType === 'task'" class="status" v-bind:class="setStatus(status)">{{ status }}</p>
        <p class="item__last-change">{{ item.change }}</p>
      </div>
    </div>
    <BaseDropdown v-bind:typeIcon="'dots'" v-bind:parent="'item'" v-bind:color="'secondary'" v-bind:list="[{name: 'Редактировать'}, {name: 'Удалить', subClass: 'delete'}]"></BaseDropdown>
  </div>
</template>

<script>
export default {
  props: {
    itemType: String,
    item: Object,
    status: String
  },
  methods: {
    setStatus: (status) => {
      switch (status) {
      case 'Черновик':
      case 'В работе':
      case 'Тестирование':
        return 'status_in-work';
      case 'Завершена':
      case 'Выполнена':
      case 'Закрыта':
        return 'status_done';
      case 'Удалена':
      return 'status_error';
      }
    },
  }
}
</script>

<style src="./style.scss"></style>