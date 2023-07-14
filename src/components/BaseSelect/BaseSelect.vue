<template>
  <div class="select__container">
    <label v-if="label" v-bind:for="name">{{ label }} <span v-if="isRequire">*</span></label> 
    <div v-bind:class="[{'active': isActive}, 'select__base']"
      v-on:click="toggleSelect"
      v-click-outside="onClickOutside">
      <div v-bind:class="[{'selected': selectedName}, 'select__placeholder']">{{ setPlaceholder }}</div>

      <ul class="select__list">
        <li
        v-for="item in list" 
        v-bind:key="item.id"
        v-bind:data-id="item.id"
        v-on:click="setSort($event)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

export default {
  props: {
      type: {
        type: String,
        required: true
      },
      update: {
        type: Function,
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
    setPlaceholder: function() {
      return this.selectedName ? this.selectedName : this.placeholder;
    }
  },

  methods: {
    ...mapActions('stateTask', ['setTaskSort']),
    ...mapActions('stateProject', ['setProjectSort']),

    dataChange: function() {
      this.$emit('dataSend', {name: this.name, value: this.model.value})
    },

    toggleSelect: function(e) {
      if (e.target.closest('.select__base') && !e.target.closest('.select__list')) {
        this.isActive = !this.isActive;
      }
    },

    setSort: function(e) {
      if (!e.target.classList.contains('active')) {
        [...e.target.parentElement.children].forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
        this.selectedName = e.target.textContent;
        this.isActive = false;
        if (this.type === 'task') {this.$store.dispatch('setTaskSort', e.target.dataset.id);}
        if (this.type === 'project') {this.$store.dispatch('setProjectSort', e.target.dataset.id);}
        this.update();
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