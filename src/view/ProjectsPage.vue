<template>
  <main>
    <BaseStub v-if="isStub" v-bind:text="'Не создан ни один проект'" v-bind:textButton="'Создать проект'"></BaseStub>
    <template v-else>
      <div class="items__container">
      <ListItem v-for="project in setList" v-bind:key="project._id" v-bind:itemType="itemType"
        v-bind:item="project"></ListItem>
    </div>
    <BasePagination
      v-if="setList"
      v-bind:type="'проекта'"
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
import { mapState, mapActions } from 'vuex';

export default {
  data() {
      return {
        itemType: 'project',
        list: null,
        totalPage: null,
        isStub: false,
        currentPage: 1,
      }
  },

  async created() {
    await this.$store.dispatch('updateProjectList');
    await this.getList();
    },

  components: {
    ListItem,
},

computed: {
  ...mapState(['projectPage']),
  // ...mapGetters(['projectTotal', 'projectList', 'projectCurrent']),
  ...mapActions(['updateProjectList']),

  setList: function() {
    return this.list;
  },

  setCurrentPage: function() {
    return this.currentPage;
  },

  setTotalPage: function() {
    return this.totalPage;
  },
},

methods: {
  getList: async function() {
    this.totalPage = await this.projectPage.totalPage;
    this.list = await this.projectPage.list[0];
    this.currentPage = await this.projectPage.currentPage;
  }
}
}
</script>