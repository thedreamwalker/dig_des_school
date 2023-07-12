<template>
  <div class="filter__container">
    <BaseInput v-bind:clear="true"></BaseInput>
    <BaseButton v-bind:color="'secondary'" v-bind:parent="'item'" v-bind:typeIcon="'filter'"></BaseButton>
    <BaseSelect 
    v-bind:placeholder="setPlaceholder" 
    v-bind:name="'sort'" 
    v-bind:list="[{id: 'sort_name', name: 'По названию'}, {id: 'sort_author', name: 'По автору'}, {id: 'sort_create', name: 'По дате создания'}, {id: 'sort_update', name: 'По дате обновления'}]"></BaseSelect>
    <BaseButton v-bind:color="'secondary'" v-bind:parent="'item'" v-bind:typeIcon="'sort-up'"></BaseButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholderSelect: 'Выберите значение...'
    }
  },

  computed: {
    setPlaceholder: function() {
      return this.placeholderSelect.length > 13 ? `${this.placeholderSelect.slice(0, 13)}...` : this.placeholderSelect;
    }
  },
}
</script>

<style src="./style.scss"></style>