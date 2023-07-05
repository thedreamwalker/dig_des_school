<template>
    <div class="modal">
      <h2>Вход</h2>
      <form action="#">
        <BaseInput 
          v-bind:label="'Логин'" 
          v-bind:name="'login'" 
          v-bind:isRequire="true" 
          v-on:dataSend="change.saveData($event)">
        </BaseInput>
        <BaseInput 
          v-bind:label="'Пароль'" 
          v-bind:name="'password'" 
          v-bind:isRequire="true" 
          v-on:dataSend="change.saveData($event)">
        </BaseInput>
      </form>
      <BaseButton v-on:click="this.login">Войти</BaseButton>
    </div>
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

<style src="./style.scss"></style>