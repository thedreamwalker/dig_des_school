<template>
  <main>
    <BaseStub v-if="isStub" v-bind:text="'Не создана ни одна задача'" v-bind:textButton="'Создать задачу'" v-bind:linkButton="'CreateTaskPage'"></BaseStub>
    <template v-else>
      <div class="items__container">
        <div class="router__wrapper">
          <router-link v-bind:to="{name: 'CreateTaskPage'}" v-bind:class="'button_secondary'">Создать задачу</router-link>
        </div>
        <ListItem v-for="task in list" v-bind:key="task._id" v-bind:itemType="itemType"
          v-bind:item="task" v-bind:status="task.status">
        </ListItem>
      </div>
    </template>
  </main>
</template>

<script>
import ListItem from '@/components/ListItem/ListItem.vue'
import {useAxios} from '@/api/api';

// useAxios('POST', 'tasks', 'createTask');
// useAxios('GET', `tasks/search`);

export default {
  data() {
      return {
        itemType: 'task',
        list: null,
        isStub: false
        // list: [{id: "1", name: 'Длинное название', code: '12', author: 'Иванов И.И. создал 1 час назад', change: 'Баранов А.А. изменил 19 минут назад', status: 'DRAFT'}}, 
        // {{id: "2", name: 'Другое еще более длинное название', code: '512', author: 'НеИванов И.И. создал 3 часа назад', change: 'НеБаранов А.А. изменил 19 минут назад', status: 'TESTING_DONE'}},
        // {{id: "3", name: 'Задача такая-то', code: '1752', author: 'Неиванов И.И. создал 12 часов назад', change: 'Баранов А.А. изменил 3 минуты назад', status: 'DELETED'}},
        // {{id: "4", name: 'Задача какая-то', code: '2182', author: 'Баранов И.И. создал 7 часов назад', change: 'Неиванов А.А. изменил 8 минут назад'}},
        // {{id: "5", name: 'Задача этакая-то', code: '4145', author: 'Небаранов И.И. создал 3 часа назад', change: 'Иванов А.А. изменил 51 минуту назад', status: 'COMPLETED'}}],

      }
  },

  async created() {
      const list = await useAxios('POST', `tasks/search`);
      this.list = list.tasks;
      if (!this.list || this.list.length === 0) {
        this.isStub = true;
      }
    },

  components: {
    ListItem,
  },
}
</script>