<template>
  <main>
    <div class="profile">
    <div class="profile__avatar">
      <img
      v-bind:src="avatar"
      alt="аватар пользователя">
    </div>
    <div class="profile__detail">
      <div class="profile__name">
        <h2>{{name}}</h2>
        <p class="status" v-bind:class="setStatus">{{setStatusText}}</p>
      </div>
      <div class="profile__about">
        <p><span>О себе:</span></p>
        <p>{{about}}</p>
      </div>
    </div>
  </div>
  </main>
</template>

<script>
export default {
  props: {
    avatar: String,
    name: String,
    about: String,
  },
  
  data() {
    return {
      isOnline: false,
    }
  },

  computed: {
    setStatus: function() {
      return this.isOnline ? 'status_active' : 'status_inactive';
    },
    setStatusText: function() {
      return this.isOnline ? 'Активен' : 'Не активен';
    }
  }
}
</script>

<style src="./style.scss"></style>