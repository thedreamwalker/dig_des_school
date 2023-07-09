<template>
  <main>
    <BaseStub v-if="isStub" v-bind:text="'Не создан ни один проект'" v-bind:textButton="'Создать проект'"></BaseStub>
    <template v-else>
      <div class="items__container">
      <ListItem v-for="project in list" v-bind:key="project._id" v-bind:itemType="project.itemType"
        v-bind:item="project"></ListItem>
    </div>
    <BasePagination
      v-if="allItem"
      v-bind:type="itemType"
      v-bind:currentNumberPage="this.allItem.page"
      v-bind:allPages="this.allItem.total"
      v-bind:data="this.allItem">
    </BasePagination>
    </template>
  </main>
</template>

<script>
import ListItem from '@/components/ListItem/ListItem.vue';
import {useAxios} from '@/api/api';

export default {
  data() {
      return {
        itemType: 'project',
        list: null,
        allItem: null,
        // list: [{itemType: 'project', item: {id: "1", name: 'Длинное название', code: '12', author: 'Иванов И.И. создал 1 час назад', change: 'Баранов А.А. изменил 9 минут назад'}}, 
        // {itemType: 'project', item: {id: "2", name: 'Другое еще более длинное название', code: '512', author: 'НеИванов И.И. создал 3 часа назад', change: 'НеБаранов А.А. изменил 19 минут назад'}},
        // {itemType: 'project', item: {id: "3", name: 'Проект такой-то', code: '1752', author: 'Неиванов И.И. создал 12 часов назад', change: 'Баранов А.А. изменил 3 минуты назад'}},
        // {itemType: 'project', item: {id: "4", name: 'Проект какой-то', code: '2182', author: 'Баранов И.И. создал 7 часов назад', change: 'Неиванов А.А. изменил 8 минут назад'}},
        // {itemType: 'project', item: {id: "5", name: 'Проект этакий-то', code: '4145', author: 'Небаранов И.И. создал 3 часа назад', change: 'Иванов А.А. изменил 51 минуту назад'}},],
        isStub: false
      }
  },

  async created() {
      const list = await useAxios('POST', `projects/search`);
      this.list = list.projects;
      this.allItem = list;
      if (!this.list || this.list.length === 0) {
        this.isStub = true;
      }
    },

  components: {
    ListItem,
},
}
</script>