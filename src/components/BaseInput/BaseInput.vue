<template>
  <div class="input__container">
    <label v-bind:for="name">{{ label }} <span v-if="isRequire">*</span></label> 
    <input 
      v-model="model.value"
      v-on:input="dataChange" 
      type="text" v-bind:id="name" v-bind:name="name" v-bind:placeholder="setPlaceholder" v-bind:required="isRequire">
    <BaseIcon
        v-show="typeIcon"
        v-bind:type="typeIcon"
        v-bind:typeIcon="typeIcon"
        v-bind:parent="'form'">
    </BaseIcon>
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
  
  methods: {
    dataChange: function() {
      this.$emit('dataSend', {name: this.name, value: this.model.value})
    }
  },

  computed: {
    setPlaceholder: function() {
      return this.placeholder ? this.placeholder : 'Введите текст...';
    }
  }
}
</script>

<style src="./style.scss"></style>