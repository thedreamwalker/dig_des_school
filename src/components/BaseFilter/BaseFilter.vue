<template>
  <div class="filter__container">
    <BaseInput v-bind:clear="true" v-bind:type="'filter'" v-bind:customFunction="setFilter"></BaseInput>
    <BaseButton v-bind:color="'secondary'" v-bind:parent="'item'" v-bind:typeIcon="'filter'"></BaseButton>
    <div class="filter__sort">
      <BaseSelect 
      v-bind:type="type"
      v-bind:placeholder="this.placeholderSelect" 
      v-bind:name="'sort'" 
      v-bind:list="setSort"
      v-bind:update="update"></BaseSelect>
      <BaseButton v-bind:color="'secondary'" v-bind:parent="'item'" v-bind:typeIcon="'sort-up'" v-bind:customClick="setSortUpDown"></BaseButton>
    </div>
    
  </div>
</template>

<script>
import { mapActions } from 'vuex';
  
export default {
  props: {
    type: String,
    update: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      placeholderSelect: 'Выберите значение...'
    }
  },

  computed: {

    setSort: function() {
      const sortType = {
        task: [
          {id: 'name', name: 'По названию'}, 
          {id: 'author', name: 'По автору'}, 
          {id: 'status', name: 'По статусу'}, 
          {id: 'executor', name: 'По исполнителю'}, 
          {id: 'dateCreated', name: 'По дате создания'}, 
          {id: 'dateEdited', name: 'По дате обновления'}],
          project: [
            {id: 'name', name: 'По названию'}, 
            {id: 'author', name: 'По автору'}, 
            {id: 'dateCreated', name: 'По дате создания'}, 
            {id: 'dateEdited', name: 'По дате обновления'},
          ]
      }
      return sortType[this.type];
    }
  },

  methods: {
    ...mapActions('stateTask', ['setTaskSortType', 'setTaskSearch',]),
    ...mapActions('stateProject', ['setProjectSortType', 'setProjectSearch']),

    setFilter: function(value) {
      if (this.type === 'task') {this.$store.dispatch('setTaskSearch', {'name': value});}
      if (this.type === 'project') {this.$store.dispatch('setProjectSearch', {'name': value});}
      this.update();
    },

    setSortUpDown: function(e) {
      const button = e.target.closest('.button_small');
      if (button.classList.contains('active')) {
        if (this.type === 'task') {this.$store.dispatch('setTaskSortType', 'desc');}
        if (this.type === 'project') {this.$store.dispatch('setProjectSortType', 'desc');}
        button.classList.remove('active');
      } else {
        if (this.type === 'task') {this.$store.dispatch('setTaskSortType', 'asc');}
        if (this.type === 'project') {this.$store.dispatch('setProjectSortType', 'asc');}
        button.classList.add('active');
      }

      this.update();
    }
  }
}
</script>

<style src="./style.scss"></style>