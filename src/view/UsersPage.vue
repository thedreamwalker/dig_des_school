<template>
  <main>
    <BaseStub v-if="isStub"></BaseStub>
    <template v-else>
      <div class="items__control">
        <BaseFilter 
        v-bind:type="'user'"
        v-on:onSetFilter="setFilter"></BaseFilter>
      </div>
      <div class="items__container">
        <ListItem v-for="user in list" v-bind:key="user._id" v-bind:itemType="itemType"
          v-bind:item="user" v-bind:status="user.status">
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
        itemType: 'user',
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
  ...mapGetters(['userTotal', 'userList', 'userCurrent']),

  list: function() {
    return this.userList;
  },

  currentPage: function() {
    return this.userCurrent;
  },

  totalPage: function() {
    return this.userTotal;
  },
},

methods: {
  ...mapActions(['updateUserList', 'setUserSetting']),

  getList: async function() {
    await this.updateUserList();
    if (!this.userList) {
      this.isStub = false;
    }
  },

  setFilter: function(object) {
    this.setUserSetting(object);
    this.getList();
  },
}
}
</script>