<template>
  <main>
    <BaseButton v-on:click="this.login">Войти</BaseButton>
  </main>
</template>
<script>
  export default {
    methods: {
      login: function() {
        if (localStorage.getItem('Auth')) {
          localStorage.setItem('Auth', true);
        } else {
          localStorage.setItem('Auth', false);
        }
        
      }
    }
  }
</script>