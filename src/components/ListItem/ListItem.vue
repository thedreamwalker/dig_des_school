<template>
  <div class="item">
    <div class="item__container">
      <div class="item__title">
        <p class="item__name">{{ item.name }}</p>
        <img v-show="itemType === 'task'" class="item__avatar" src="@/assets/img/user-item.png" alt="аватар пользователя">
      </div>
      <div class="item__details">
        <p class="item__code"># {{ item.code }}</p>
        <p class="item__author">{{ item.author }}</p>
        <p v-show="itemType === 'task'" class="item__status" v-bind:class="setStatus(status)">{{ status }}</p>
        <p class="item__last-change">{{ item.change }}</p>
      </div>
    </div>
    <BaseButton typeIcon="dots" v-bind:isItem="true" v-bind:isSecondary="true" v-bind:constentList="['Редактировать', 'Удалить']"></BaseButton>
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
        return 'item__status_in-work';
      case 'Завершена':
      case 'Выполнена':
      case 'Закрыта':
        return 'item__status_done';
      case 'Удалена':
      return 'item__status_error';
      case 'Не активен':
      return 'item__status_disabled';
      }
    }
  }
}
</script>

<style src="@/css/base.scss"></style>
<style src="@/css/item-style.scss"></style>