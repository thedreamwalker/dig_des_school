<template>
  <div class="item">
    <div class="item__container">
      <div class="item__title">
        <p class="item__name"> <router-link v-bind:to="{name: detailPage, params: {id: this.item.id, item: this.item, parent: this.itemType}}">{{ item.name }}</router-link></p>
        <img v-if="itemType === 'task'" class="item__avatar" src="@/assets/img/user-item.jpg" alt="аватар пользователя">
      </div>
      <div class="item__details">
        <p class="item__code"># {{ item.code }}</p>
        <p class="item__author">{{ item.author }}</p>
        <BaseStatus v-if="itemType === 'task'" v-bind:status="item.status"></BaseStatus>
        <p class="item__last-change">{{ item.change }}</p>
      </div>
    </div>
    <BaseDropdown v-bind:typeIcon="'dots'" v-bind:parent="'item'" v-bind:color="'secondary'" v-bind:list="[{name: 'Редактировать', link: '/edit'}, {name: 'Удалить', link: '/delete', subClass: 'delete'}]"></BaseDropdown>
  </div>
</template>

<script>
console.log()
export default {
  props: {
    itemType: String,
    item: Object,
  },

  computed: {
    detailPage: function() {
      return `${this.itemType[0].toUpperCase()}${this.itemType.slice(1)}DetailPage`;
    }
  },
}
</script>

<style src="./style.scss"></style>