<template>
  <main>
    <Stub v-if="list.length === 0" v-bind:type="'project'"></Stub>
    <div class="items__container">
      <ListItem v-for="project in list" v-bind:key="project.item.code" v-bind:itemType="project.itemType"
        v-bind:item="project.item"></ListItem>
    </div>
  </main>
</template>

<script>
import ListItem from '@/components/ListItem/ListItem.vue';
import Stub from '@/components/BaseStub/BaseStub.vue'

export default {
  data() {
      return {
        list: [{itemType: 'project', item: {id: "1", name: 'Длинное название', code: '12', author: 'Иванов И.И. создал 1 час назад', change: 'Баранов А.А. изменил 9 минут назад'}}, 
        {itemType: 'project', item: {id: "2", name: 'Другое еще более длинное название', code: '512', author: 'НеИванов И.И. создал 3 часа назад', change: 'НеБаранов А.А. изменил 19 минут назад'}},
        {itemType: 'project', item: {id: "3", name: 'Проект такой-то', code: '1752', author: 'Неиванов И.И. создал 12 часов назад', change: 'Баранов А.А. изменил 3 минуты назад'}},
        {itemType: 'project', item: {id: "4", name: 'Проект какой-то', code: '2182', author: 'Баранов И.И. создал 7 часов назад', change: 'Неиванов А.А. изменил 8 минут назад'}},
        {itemType: 'project', item: {id: "5", name: 'Проект этакий-то', code: '4145', author: 'Небаранов И.И. создал 3 часа назад', change: 'Иванов А.А. изменил 51 минуту назад'}},],
      }
  },

  components: {
    ListItem,
    Stub
  },
}
</script>