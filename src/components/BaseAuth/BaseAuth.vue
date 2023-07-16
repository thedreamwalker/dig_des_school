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
          v-on:dataSend="saveData">
        </BaseInput>
        <BaseInput 
          v-bind:label="'Пароль'" 
          v-bind:name="'password'" 
          v-bind:isRequire="true" 
          v-on:dataSend="saveData">
        </BaseInput>
      </form>
      <p class="auth-modal__error" v-if="isError">Неверный логин или пароль</p>
      <div class="auth-modal__buttons">
        <BaseButton v-bind:color="'primary'" v-on:customClick="sendAuth">Войти</BaseButton>
      </div>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        userData: {
          login: '',
          password: ''
        },
        error: false
      }
    },

    computed: {
      isError: function() {
        return this.error;
      },
    },

    methods: {
      ...mapActions(['setAuth']),

      saveData: function(obj) {
        const name = obj.name;
        this.userData[name] = obj.value;
      },

      sendAuth: async function() {
        await this.setAuth(this.userData);

        if (localStorage.getItem('token')) {
          if (this.$route.params.nextUrl) {
            this.$router.push({ path: this.$route.params.nextUrl });
          } else {
            this.$router.push({ path: '/' });
          }
        } else {
          this.error = true;
        }
      }
    }
  }
</script>

<style src="./style.scss"></style>