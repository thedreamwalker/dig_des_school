<template>
  <main>
    <BaseStub v-if="isStub" v-bind:text="'Не создана ни одна задача'" v-bind:textButton="'Создать задачу'" v-bind:linkButton="'CreateTaskPage'"></BaseStub>
    <template v-else>
      <div class="items__control">
        <BaseFilter 
        v-bind:type="'task'"
        v-bind:update="getList"></BaseFilter>
        <div class="router__wrapper">
          <router-link v-bind:to="{name: 'CreateTaskPage'}" v-bind:class="'button_secondary'">Создать задачу</router-link>
        </div>
      </div>
      <div class="items__container">
        <ListItem v-for="task in setList" v-bind:key="task._id" v-bind:itemType="itemType"
          v-bind:item="task" v-bind:status="task.status">
        </ListItem>
      </div>
      <BasePagination
      v-if="setList && setTotalPage > 1"
      v-bind:itemType="itemType"
      v-bind:typeText="'задач'"
      v-bind:currentNumberPage="setCurrentPage"
      v-bind:allPages="setTotalPage"
      v-bind:data="setList"
      v-bind:update="getList">
    </BasePagination>
    </template>
  </main>
</template>

<script>
import ListItem from '@/components/ListItem/ListItem.vue'
import { mapState, mapGetters, mapActions } from 'vuex';

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
  ...mapState(['taskPage']),
  ...mapGetters(['taskTotal', 'taskList', 'taskCurrent']),
  ...mapActions(['updateTaskList']),

  setList: function() {
    return this.$store.getters.taskList;
  },

  setCurrentPage: function() {
    return this.$store.getters.taskCurrent;
  },

  setTotalPage: function() {
    return this.$store.getters.taskTotal;
  },
},

methods: {
  getList: async function() {
    await this.$store.dispatch('updateTaskList');
    if (!this.$store.getters.taskList) {
      this.isStub = false;
    }
  }
}
}
</script>