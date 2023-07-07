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
        <BaseStatus v-bind:status="setStatusClass" v-bind:statusName="setStatusName"></BaseStatus>
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
import {userStatusName, userStatusClass} from '@/components/BaseStatus/statuses'

export default {
  props: {
    avatar: String,
    name: String,
    about: String,
  },
  computed: {
    // заменить на данные из родителя!
    setStatusName: function() {
      return userStatusName['ACTIVE'];
    },

    // заменить на данные из родителя!
    setStatusClass: function() {
      return userStatusClass['ACTIVE'];
    },
  },
}
</script>

<style src="./style.scss"></style>