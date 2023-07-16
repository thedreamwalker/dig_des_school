<template>
  <main>
    <BaseStub v-if="isStub" v-bind:text="'Не создана ни одна задача'" v-bind:textButton="'Создать задачу'" v-bind:linkButton="'CreateTaskPage'"></BaseStub>
    <template v-else>
      <div class="items__control">
        <BaseFilter 
        v-bind:type="'task'"
        v-on:onSetFilter="setFilter"></BaseFilter>
        <div class="router__wrapper">
          <router-link v-bind:to="{name: 'CreateTaskPage'}" v-bind:class="'button_secondary'">Добавить</router-link>
        </div>
      </div>
      <div class="items__container">
        <ListItem v-for="task in list" v-bind:key="task._id" v-bind:itemType="itemType"
          v-bind:item="task" v-bind:status="task.status">
        </ListItem>
      </div>
      <BasePagination
      v-if="list && totalPage > 1"
      v-bind:itemType="itemType"
      v-bind:typeText="'задач'"
      v-bind:currentNumberPage="currentPage"
      v-bind:allPages="totalPage"
      v-bind:data="list"
      v-on:onSetPagination="setFilter">
    </BasePagination>
    </template>
  </main>
</template>

<script>
import ListItem from '@/components/ListItem/ListItem.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
      return {
        itemType: 'task',
        isStub: false,
      }
  },

  async created() {
    await this.getList();
  },

  components: {
    ListItem,
  },

  computed: {
  ...mapGetters(['taskTotal', 'taskList', 'taskCurrent']),

  list: function() {
    return this.taskList;
  },

  currentPage: function() {
    return this.taskCurrent;
  },

  totalPage: function() {
    return this.taskTotal;
  },
},

methods: {
  ...mapActions(['setTaskSetting', 'updateTaskList',]),

  getList: async function() {
    await this.updateTaskList();
    if (!this.taskList) {
      this.isStub = false;
    }
  },

  setFilter: function(object) {
    this.setTaskSetting(object);
    this.getList();
  },
}
}
</script>