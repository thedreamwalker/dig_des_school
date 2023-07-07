<template>
  <div class="item">
    <div class="item__container">
      <div class="item__title">
        <p class="item__name">{{ item.name }}</p>
        <img v-if="itemType === 'task'" class="item__avatar" src="@/assets/img/user-item.jpg" alt="аватар пользователя">
      </div>
      <div class="item__details">
        <p class="item__code"># {{ item.code }}</p>
        <p class="item__author">{{ item.author }}</p>
        <BaseStatus v-if="itemType === 'task'" v-bind:statusName="setStatusName" v-bind:status="setStatusClass"></BaseStatus>
        <p class="item__last-change">{{ item.change }}</p>
      </div>
    </div>
    <BaseDropdown v-bind:typeIcon="'dots'" v-bind:parent="'item'" v-bind:color="'secondary'" v-bind:list="[{name: 'Редактировать'}, {name: 'Удалить', subClass: 'delete'}]"></BaseDropdown>
  </div>
</template>

<script>
import {taskStatusName, taskStatusClass} from '@/components/BaseStatus/statuses'
export default {
  props: {
    itemType: String,
    item: Object,
  },
  computed: {
    setStatusName: function() {
      return taskStatusName[this.item.status];
    },

    setStatusClass: function() {
      return taskStatusClass[this.item.status];
    },
  },
}
</script>

<style src="./style.scss"></style>