<template>
  <div class="input__container">
    <label v-if="label" v-bind:for="name">{{ label }} <span v-if="isRequire">*</span></label> 
    <input 
      v-model="model.value"
      v-on:input="dataChange" 
      v-on:change="paginationSet"
      type="text" v-bind:id="name" v-bind:name="name" v-bind:placeholder="setPlaceholder" v-bind:required="isRequire">
      <button v-if="clear" v-on:click="clearInput" v-bind:class="setClear"><BaseIcon v-bind:type="'clear'" v-bind:iconSize="{width: '16px', height: '16px'}" v-bind:parent="'input'"></BaseIcon></button>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    name: String,
    label: String,
    placeholder: {
      type: String,
      default: 'Введите текст...'
    },
    clear: Boolean,
    isRequire: Boolean,
    customFunction: {
      type: Function,
      required: false
    }
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
    },

    paginationSet: function() {
      if (this.type === 'pagination' && this.customFunction) {
        this.customFunction(this.model.value);
      }
    },

    clearInput: function() {
      this.model.value = '';
    }
  },

  computed: {
    setPlaceholder: function() {
      return this.placeholder;
    },

    setClear: function() {
      return this.model.value ? 'active' : '';
    }
  }
}
</script>

<style src="./style.scss"></style>