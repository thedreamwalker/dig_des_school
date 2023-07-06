<template>
  <p class="status" v-bind:class="setStatusClass">{{ setStatusName }}</p>
</template>

<script>

import {taskStatus, taskStatusName, taskStatusClass, userStatus, userStatusName, userStatusClass} from './statuses'

export default {
  props: {
    status: String,
    type: {
      type: String,
      default: 'task'
    }
  },

  computed: {
    setStatusName: function() {
      return this.type === 'user' ? userStatusName[this.status] : taskStatusName[this.status];
    },

    setStatusClass: function() {
      return this.type === 'user' ? userStatusClass[this.status] : taskStatusClass[this.status];
    },
  },
}
</script>