<template>
  <main>
    <Stub v-if="list.length === 0" v-bind:type="'project'"></Stub>
    <ListItem v-for="project in list" v-bind:key="project.item.code" v-bind:itemType="project.itemType"
      v-bind:item="project.item"></ListItem>
  </main>
</template>

<script>
import ListItem from '@/components/ListItem/ListItem.vue';
import Stub from '@/components/BaseStub/BaseStub.vue'

export default {
  data() {
      return {
        list: [{itemType: 'project', item: {name: 'Длинное название', code: '12', author: 'Иванов И.И. создал 1 час назад', change: 'Баранов А.А. изменил 9 минут назад'}}, 
        {itemType: 'project', item: {name: 'Другое еще более длинное название', code: '512', author: 'НеИванов И.И. создал 3 часа назад', change: 'НеБаранов А.А. изменил 19 минут назад'}},
        {itemType: 'project', item: {name: 'Проект такой-то', code: '1752', author: 'Неиванов И.И. создал 12 часов назад', change: 'Баранов А.А. изменил 3 минуты назад'}},
        {itemType: 'project', item: {name: 'Проект какой-то', code: '2182', author: 'Баранов И.И. создал 7 часов назад', change: 'Неиванов А.А. изменил 8 минут назад'}},
        {itemType: 'project', item: {name: 'Проект этакий-то', code: '4145', author: 'Небаранов И.И. создал 3 часа назад', change: 'Иванов А.А. изменил 51 минуту назад'}},],
      }
  },

  components: {
    ListItem,
    Stub
  },
}
</script>

<style>

</style>