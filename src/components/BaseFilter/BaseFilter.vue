<template>
  <div class="filter__container">
    <BaseInput v-bind:clear="true" v-bind:type="'filter'" v-on:customEvent="setSearch"></BaseInput>
    <FilterForm v-if="type === 'task'" v-bind:type="type"></FilterForm>
    <div class="filter__sort">
      <BaseSelect 
      v-if="type !== 'user'"
      v-bind:type="type"
      v-bind:placeholder="this.placeholderSelect" 
      v-bind:name="'sort'" 
      v-bind:list="dataSort"
      v-on:customEvent="setSort"></BaseSelect>
      <BaseButton v-bind:color="'secondary'" v-bind:parent="'item'" v-bind:typeIcon="'sort-up'" v-on:customClick="setSortUp"></BaseButton>
    </div>
    
  </div>
</template>

<script>
import FilterForm from '@/components/BaseFilter/FilterForm.vue'
import { mapActions } from 'vuex';
  
export default {
  props: {
    type: String,
  },

  data() {
    return {
      placeholderSelect: 'Выберите значение...',
      filterObject: {
        sort: {
          field: 'dateCreated',
          type: 'desc',
        }
      },
    }
  },

  components: {
    FilterForm
  },

  computed: {
    dataSort: function() {
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
    ...mapActions(['setProjectSearch', 'setTaskSearch',]),

    setSearch : function (value) {
      this.filterObject.filter = {...this.filterObject.filter, ...{name: value}};
      this.$emit('onSetFilter', this.filterObject);
    },

    setSort: function (e, selectedId) {
      this.filterObject.sort = {...this.filterObject.sort, ...{field: selectedId}};
      this.$emit('onSetFilter', this.filterObject);
    },

    setSortUp: function (e, isActive) {
      const value = isActive ? 'asc' : 'desc';
      if (this.type !== 'user') {
        this.filterObject.sort = {...this.filterObject.sort, ...{type: value}};
      } else {
        this.filterObject = {...this.filterObject, ...{sort: value}};
      }
      
      this.$emit('onSetFilter', this.filterObject);
    },
  }
}
</script>

<style src="./style.scss"></style>