<template>
  <div class="select__container">
    <label v-if="label" v-bind:for="name">{{ label }} <span v-if="isRequire">*</span></label> 
    <div v-bind:class="[{'active': isActive}, 'select__base']"
      v-on:click="toggleSelect"
      v-click-outside="onClickOutside">
      <div v-bind:class="[{'selected': selectedName}, 'select__placeholder']">{{ placeholderText }}</div>

      <ul class="select__list">
        <li
        v-for="item in list" 
        v-bind:key="item.id"
        v-bind:data-id="item.id"
        v-bind:class="[{'active': selectedName === item.name}]"
        v-on:click="onCustomEvent($event)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

export default {
  props: {
      type: {
        type: String,
        required: true
      },
      list: {
        type: Array,
        required: true
      },
      name: String,
      label: String,
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
      selectedName: ''
    }
  },

  computed: {
    placeholderText: function() {
      return this.selectedName ? this.selectedName : this.placeholder;
    }
  },

  methods: {
    dataChange: function() {
      this.$emit('dataSend', {name: this.name, value: this.model.value})
    },

    toggleSelect: function() {
      this.isActive = !this.isActive;
    },

    onCustomEvent: function(e) {
      this.selectedName = e.currentTarget.textContent.trim();
      this.$emit('customEvent', e, e.currentTarget.dataset.id);
    },

    onClickOutside: function() {
      if (this.isActive) {
        this.isActive = !this.isActive;
      }
    },
  },
}
</script>

<style src="./style.scss"></style>