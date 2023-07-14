<template>
  <main>
    <BaseStub v-if="isStub"></BaseStub>
    <template v-else>
      <div class="items__control">
        <BaseFilter 
        v-bind:type="'user'"
        v-bind:update="getList"></BaseFilter>
      </div>
      <div class="items__container">
        <ListItem v-for="user in setList" v-bind:key="user._id" v-bind:itemType="itemType"
          v-bind:item="user" v-bind:status="user.status">
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
  ...mapGetters('stateUser', ['userTotal', 'userList', 'userCurrent']),

  setList: function() {
    return this.$store.getters.userList;
  },

  setCurrentPage: function() {
    return this.$store.getters.userCurrent;
  },

  setTotalPage: function() {
    return this.$store.getters.userTotal;
  },
},

methods: {
  ...mapActions('stateUser', ['updateUserList']),

  getList: async function() {
    await this.$store.dispatch('updateUserList');
    if (!this.$store.getters.userList) {
      this.isStub = false;
    }
  }
}
}
</script>