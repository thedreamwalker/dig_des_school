<template>
  <div class="filter__container">
    <BaseInput v-bind:clear="true"></BaseInput>
    <BaseButton v-bind:color="'secondary'" v-bind:parent="'item'" v-bind:typeIcon="'filter'"></BaseButton>
    <BaseSelect 
    v-bind:type="type"
    v-bind:placeholder="this.placeholderSelect" 
    v-bind:name="'sort'" 
    v-bind:list="setSort"
    v-bind:update="update"></BaseSelect>
    <BaseButton v-bind:color="'secondary'" v-bind:parent="'item'" v-bind:typeIcon="'sort-up'"></BaseButton>
  </div>
</template>

<script>
  
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
          {id: 'dateEdited', name: 'По дате обновления'}]
      }
      return sortType[this.type];
    }
  },
}
</script>

<style src="./style.scss"></style>