<template>
  <main>
    <Stub v-if="isStub" v-bind:text="'Не создана ни одна задача'" v-bind:textButton="'Создать задачу'"></Stub>
    <template v-else>
      <div class="items__container">
        <BaseButton
        v-bind:color="'secondary'"
        v-bind:text="'Создать задачу'"
        v-on:setPage="changeActivePage($event)">
        </BaseButton>
        <ListItem v-for="task in list" v-bind:key="task.item.code" v-bind:itemType="task.itemType"
          v-bind:item="task.item" v-bind:status="task.status">
        </ListItem>
      </div>
    </template>
    
  </main>
</template>

<script>
import ListItem from '@/components/ListItem/ListItem.vue'
import Stub from '@/components/BaseStub/BaseStub.vue'

export default {
  data() {
      return {
        list: [{itemType: 'task', item: {name: 'Длинное название', code: '12', author: 'Иванов И.И. создал 1 час назад', change: 'Баранов А.А. изменил 19 минут назад'}, status: 'Черновик'}, 
        {itemType: 'task', item: {name: 'Другое еще более длинное название', code: '512', author: 'НеИванов И.И. создал 3 часа назад', change: 'НеБаранов А.А. изменил 19 минут назад'}, status: 'Выполнена'},
        {itemType: 'task', item: {name: 'Проект такой-то', code: '1752', author: 'Неиванов И.И. создал 12 часов назад', change: 'Баранов А.А. изменил 3 минуты назад'}, status: 'Удалена'},
        {itemType: 'task', item: {name: 'Проект какой-то', code: '2182', author: 'Баранов И.И. создал 7 часов назад', change: 'Неиванов А.А. изменил 8 минут назад'}},
        {itemType: 'task', item: {name: 'Проект этакий-то', code: '4145', author: 'Небаранов И.И. создал 3 часа назад', change: 'Иванов А.А. изменил 51 минуту назад'}, status: 'Выполнена'}],
      }
  },
components: {
  ListItem,
  Stub
},
computed: {
  isStub: function() {
    return !this.list || this.list.length === 0
  }
},
  methods: {
    changeActivePage(key) {
      this.$emit('newPage', key)
    }
  }
}
</script>