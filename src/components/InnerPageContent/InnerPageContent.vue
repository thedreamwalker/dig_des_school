<template>
  <div class="inner-content__container">
      <h1 class="inner-content__title">
        {{ title }}
      </h1>
      <form id="form" v-on:submit="send($event)">
        <slot v-bind:saveData="saveData"></slot>
      </form>
      <div class="inner-content__buttons">
        <BaseButton v-bind:color="'primary'" type="submit" form="form">Создать задачу</BaseButton>
        <BaseButton v-bind:color="'secondary'" v-on:clickInput="reset($event)">Отмена</BaseButton>
      </div>
    </div>
</template>

<script>
  import BaseInput from '@/components/BaseInput/BaseInput.vue'
  import BaseTextarea from '@/components/BaseTextarea/BaseTextarea.vue'
  import BaseSelect from '@/components/BaseSelect/BaseSelect.vue'

  export default {
    props: {
      title: String
    },
    data() {
      return {
        model: {

        }
      }
    },

    components: {
      BaseInput,
      BaseTextarea,
      BaseSelect
  },

  methods: {
    saveData: function(data) {
      this.model[data.name] = data.value;
   },

   send: function(e) {
    e.preventDefault();
    console.log(this.model);
    document.querySelector('form').reset();
   },

   reset: function() {
    for (let prop in this.model) {
      this.model[prop] = '';
      document.querySelector('form').reset();
    }
  }
},
}
</script>

<style src="./style.scss"></style>