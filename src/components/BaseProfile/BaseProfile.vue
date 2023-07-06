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
        <BaseStatus v-bind:status="'ACTIVE'" v-bind:type="'user'"></BaseStatus>
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
}
</script>

<style src="./style.scss"></style>