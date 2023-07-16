<template>
  <div class="inner-content__container">
      <h1 class="inner-content__title">
        {{ title }}
      </h1>
      <form novalidate id="form" v-on:submit="send($event)">
        <slot v-bind:saveData="saveData"></slot>
      </form>
      <div class="inner-content__buttons">
        <BaseButton v-bind:color="'primary'" type="submit" form="form">Создать задачу</BaseButton>
        <BaseButton v-bind:color="'secondary'" v-on:clickInput="reset($event)">Отмена</BaseButton>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    title: String,
    data: Function
  },
  data() {
    return {
      model: {
      }
    }
  },

  async created() {
    await this.getList();
  },

  computed: {

  },

  methods: {
    ...mapActions(['updateUserList', 'updateProjectList']),

    saveData: function(data) {
      console.log(data);
      this.model[data.name] = {value: data.value, isRequire: data.isRequire}
   },

   send: function(e) {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.target.classList.add('invalid');
    } else {
      if (e.target.classList.contains('invalid')) {
        e.target.classList.remove('invalid');
      }
      console.log(this.model);
      document.querySelector('form').reset();
    }
   },

   reset: function() {
    for (let prop in this.model) {
      this.model[prop] = '';
      document.querySelector('form').reset();
    }
  },

  getList: async function() {
      await this.updateUserList();
      await this.updateProjectList();
    },
},
}
</script>

<style src="./style.scss"></style>