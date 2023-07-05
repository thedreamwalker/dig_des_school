<template>
    <div class="auth-modal">
      <div class="auth-modal__title">
        <h2>Вход</h2>
      </div> 
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
      <div class="auth-modal__buttons">
        <BaseButton v-bind:color="'primary'" v-bind:customClick="login">Войти</BaseButton>
      </div>
    </div>
</template>
<script>
  export default {
    methods: {
      login: function() {
        if (localStorage.getItem('Auth')  === 'false' || !localStorage.getItem('Auth')) {
          localStorage.setItem('Auth', true);
        } else {
          localStorage.setItem('Auth', false);
        }
        
      }
    }
  }
</script>

<style src="./style.scss"></style>