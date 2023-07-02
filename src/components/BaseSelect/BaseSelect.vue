<template>
  <div class="select__container">
    <label v-bind:for="name">{{ label }} <span v-if="isRequire">*</span></label> 
    <select 
      v-model="model.value"
      v-on:change="dataChange" 
      v-bind:id="name" v-bind:name="name"
      v-bind:required="isRequire">
      <option disabled value="" selected>Не назначен</option>
      <option
        v-for="item in list" 
        v-bind:key="item">
          {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
      list: Array,
      name: String,
      label: String,
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
    btnName() {
      return `Прибавить ${this.num}`
    }
  },

  methods: {
    dataChange: function() {
      this.$emit('dataSend', {name: this.name, value: this.model.value})
    }
  },
}
</script>

<style src="./style.scss"></style>