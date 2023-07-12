<template>
  <div class="select__container">
    <label v-if="label" v-bind:for="name">{{ label }} <span v-if="isRequire">*</span></label> 
    <select 
      v-model="model.value"
      v-on:change="dataChange" 
      v-bind:id="name" v-bind:name="name"
      v-bind:required="isRequire">
      <option disabled value="" selected>Не назначен</option>
      <option
        v-for="item in list" 
        v-bind:key="item.id">
          {{ item.name }}
      </option>
    </select>
    <div v-bind:class="[{'active': isActive}, 'select__base']"
      v-on:click="toggleSelect"
      v-click-outside="onClickOutside">
      <p>{{ placeholder }}</p>

      <ul class="select__list">
        <li
        v-for="item in list" 
        v-bind:key="item.id"
        v-on:click="setSort">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

export default {
  props: {
      list: Array,
      name: String,
      label: String,
      typeIcon: String,
      isRequire: Boolean,
      placeholder: {
        type: String,
      }
  },
  
  data() {
    return {
      model: {
        name: this.label,
        value: '',
        id: ''
      },
      isActive: false,
    }
  },

  methods: {
    dataChange: function() {
      this.$emit('dataSend', {name: this.name, value: this.model.value})
    },

    toggleSelect: function(e) {
      if (e.target.closest('.select__base') && !e.target.closest('.select__list')) {
        this.isActive = !this.isActive;
      }
    },

    setSort: function() {

    },

    onClickOutside: function () {
      if (this.isActive) {
        this.isActive = !this.isActive;
      }
    },
  },
}
</script>

<style src="./style.scss"></style>