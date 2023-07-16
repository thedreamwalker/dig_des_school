<template>
  <div class="select__container">
    <label v-if="label" v-bind:for="name">{{ label }} <span v-if="isRequire">*</span></label> 
    <!-- <select 
    v-if="this.type === 'form'"
      v-model="model.value"
      v-on:change="dataChange" 
      v-bind:id="name" v-bind:name="name"
      v-bind:required="isRequire">
      <option disabled value="">Не назначен</option>
      <option
        v-for="item in list" 
        v-bind:value="item.name"
        v-bind:key="item._id"
        v-bind:selected="{true: selectedName}">
          {{ item.name }}
      </option>
    </select> -->
    <div v-bind:class="[{'active': isActive}, {'invalid': isRequire && !selectedName}, 'select__base']"
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
    type: String,
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
      console.log('так мы тут?')
      if (this.type === 'form') {
      this.$emit('customEvent', {name: this.name, value: this.model.value, isRequire: this.isRequire})
      }
    },

    toggleSelect: function() {
      this.isActive = !this.isActive;
    },

    onCustomEvent: function(e) {
      this.selectedName = e.currentTarget.textContent.trim();
      if (this.type === 'form') {
        // this.$emit('customEvent', {name: this.name, value: this.selectedName, isRequire: this.isRequire})
      } else {
        this.$emit('customEvent', e, e.currentTarget.dataset.id);
      }
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