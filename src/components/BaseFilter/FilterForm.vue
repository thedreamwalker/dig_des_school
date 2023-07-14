<template>
  <div class="filter-form__container">
    <BaseButton v-bind:color="'secondary'" v-bind:parent="'item'" v-bind:typeIcon="'filter'" v-bind:customClick="openDropdown"></BaseButton>
    <div class="filter-form__dropdown">
      <BaseSelect 
          v-bind:label="'Статус'" 
          v-bind:name="'status'" 
          v-bind:type="type">
        </BaseSelect>
        <BaseSelect 
          v-bind:label="'Автор'" 
          v-bind:name="'author'"
          v-bind:type="type">
        </BaseSelect>
        <BaseSelect 
          v-bind:label="'Исполнитель'" 
          v-bind:name="'executor'" 
          v-bind:type="type">
        </BaseSelect>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    }
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
  // ...mapGetters('stateTask', ['taskTotal', 'taskList', 'taskCurrent']),

  setList: function() {
    return this.$store.getters.taskList;
  },

  setCurrentPage: function() {
    return this.$store.getters.taskCurrent;
  },

  setTotalPage: function() {
    return this.$store.getters.taskTotal;
  },
},

methods: {
  // ...mapActions('stateTask', ['updateTaskList']),

  openDropdown: async function(e) {
    const button = e.target.closest('.button_small');

    if (this.isActive) {
      this.isActive = false;
      button.classList.remove('active');
    } else {
      this.isActive = true;
      button.classList.add('active');
    }

    // await this.$store.dispatch('updateTaskList');
    // if (!this.$store.getters.taskList) {
    //   this.isStub = false;
    // }
  }
}
}
</script>

<style src="./style.scss"></style>