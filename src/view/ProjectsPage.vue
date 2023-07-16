<template>
  <main>
    <BaseStub v-if="isStub" v-bind:text="'Не создан ни один проект'" v-bind:textButton="'Создать проект'"></BaseStub>
    <template v-else>
      <div class="items__control">
        <BaseFilter 
        v-bind:type="'project'"
        v-on:onSetFilter="setFilter"></BaseFilter>
        <div class="router__wrapper">
          <button v-bind:class="'button_secondary'">Добавить</button>
        </div>
      </div>
      <div class="items__container">
      <ListItem v-for="project in list" v-bind:key="project._id" v-bind:itemType="itemType"
        v-bind:item="project"></ListItem>
    </div>
    <BasePagination
      v-if="list && totalPage > 1"
      v-bind:itemType="itemType"
      v-bind:typeText="'проекта'"
      v-bind:currentNumberPage="currentPage"
      v-bind:allPages="totalPage"
      v-bind:data="list"
      v-on:onSetPagination="setFilter">
    </BasePagination>
    </template>
  </main>
</template>

<script>
import ListItem from '@/components/ListItem/ListItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
      return {
        itemType: 'project',
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
  ...mapGetters(['projectTotal', 'projectList', 'projectCurrent']),

  list: function() {
    return this.projectList;
  },

  currentPage: function() {
    return this.projectCurrent;
  },

  totalPage: function() {
    return this.projectTotal;
  },
},

methods: {
  ...mapActions(['setProjectSetting', 'updateProjectList']),

  getList: async function() {
    await this.updateProjectList();
    if (!this.projectList) {
      this.isStub = false;
    }
  },

  setFilter: function(object) {
    this.setProjectSetting(object);
    this.getList();
  },
}
}
</script>