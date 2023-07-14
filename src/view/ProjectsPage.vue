<template>
  <main>
    <BaseStub v-if="isStub" v-bind:text="'Не создан ни один проект'" v-bind:textButton="'Создать проект'"></BaseStub>
    <template v-else>
      <div class="items__control">
        <BaseFilter 
        v-bind:type="'project'"
        v-bind:update="getList"></BaseFilter>
        <div class="router__wrapper">
          <button v-bind:class="'button_secondary'">Добавить</button>
        </div>
      </div>
      <div class="items__container">
      <ListItem v-for="project in setList" v-bind:key="project._id" v-bind:itemType="itemType"
        v-bind:item="project"></ListItem>
    </div>
    <BasePagination
      v-if="setList && setTotalPage > 1"
      v-bind:itemType="itemType"
      v-bind:typeText="'проекта'"
      v-bind:currentNumberPage="setCurrentPage"
      v-bind:allPages="setTotalPage"
      v-bind:data="setList"
      v-bind:update="getList">
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
  ...mapGetters('stateProject', ['projectTotal', 'projectList', 'projectCurrent']),

  setList: function() {
    return this.$store.getters.projectList;
  },

  setCurrentPage: function() {
    return this.$store.getters.projectCurrent;
  },

  setTotalPage: function() {
    return this.$store.getters.projectTotal;
  },
},

methods: {
  ...mapActions('stateProject', ['updateProjectList']),

  getList: async function() {
    await this.$store.dispatch('updateProjectList');
    if (!this.$store.getters.projectList) {
      this.isStub = false;
    }
  }
}
}
</script>