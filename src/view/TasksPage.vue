<template>
  <main>
    <ListItem v-bind:itemType="'task'" v-bind:item="{name: 'Название', code: '535451', author: 'Иванов И.И. создал 1 час назад', change: 'Баранов В.В. изменил 1 минуту назад'}" v-bind:status="'Черновик'"></ListItem>
    <ListItem v-bind:itemType="'task'" v-bind:item="{name: 'Другое Название', code: '123', author: 'Иванов В.И. создал 5 часов назад', change: 'Баранов А.А. изменил 9 минут назад'}" v-bind:status="'Выполнена'"></ListItem>
  </main>
</template>

<script>
import ListItem from '@/components/ListItem/ListItem.vue'

export default {
components: {
  ListItem
}
}
</script>

<style>

</style>