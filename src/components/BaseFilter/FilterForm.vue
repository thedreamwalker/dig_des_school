<template>
  <div class="filter-form__container">
    <BaseButton v-bind:color="'secondary'" v-bind:parent="'item'" v-bind:typeIcon="'filter'" v-bind:customClick="openDropdown"></BaseButton>
    <div class="filter-form__dropdown">
      <BaseSelect 
          v-bind:label="'Статус'" 
          v-bind:name="'status'" 
          v-bind:type="type"
          v-bind:list="listStatuses">
        </BaseSelect>
        <BaseSelect 
          v-bind:label="'Автор'" 
          v-bind:name="'author'"
          v-bind:type="type"
          v-bind:list="listUsers">
        </BaseSelect>
        <BaseSelect 
          v-bind:label="'Исполнитель'" 
          v-bind:name="'executor'" 
          v-bind:type="type"
          v-bind:list="listUsers">
        </BaseSelect>
    </div>
  </div>
</template>

<script>
import {taskStatusName} from '@/components/BaseStatus/statuses.js'
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    type: String
  },

  data() {
    return {
      isActive: false
    }
  },

  async created() {
    await this.getList();
  },

  computed: {
    ...mapGetters(['userList',]),

  listStatuses: function() {
    const map = [];

    for (let key in taskStatusName) {
      map.push({id: key, name: taskStatusName[key]});
    }

    return map;
  },

  listUsers: function() {
    if (!this.userList) {
      return [];
    } 
    return this.userList;
  },
},

  methods: {
    ...mapActions(['updateUserList']),

    openDropdown: async function(e) {
      const button = e.target.closest('.button_small');

      if (this.isActive) {
        this.isActive = false;
        button.classList.remove('active');
      } else {
        this.isActive = true;
        button.classList.add('active');
      }
    },

    getList: async function() {
      await this.updateUserList();
    },
  }
}
</script>

<style src="./style.scss"></style>