<template>
  <div class="textaria__container">
    <label 
      v-bind:for="name">
      {{ label }} 
      <span v-if="isRequire">*</span></label> 
    <textarea 
      v-model="model.value"
      v-on:input="dataChange" 
      v-bind:id="name" v-bind:name="name" v-bind:placeholder="setPlaceholder" v-bind:required="isRequire"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    label: String,
    placeholder: String,
    typeIcon: String,
    isRequire: Boolean,
  },
  
  data() {
    return {
      model: {
        name: this.label,
        value: ''
      }
    }
  },

  computed: {
    setPlaceholder: function() {
      return this.placeholder ? this.placeholder : 'Введите текст...';
    }
  },

  methods: {
    dataChange: function() {
      this.$emit('dataSend', {name: this.name, value: this.model.value})
    }
  }
}
</script>

<style src="./style.scss"></style>