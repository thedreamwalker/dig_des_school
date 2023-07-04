<template>
  <main>
    <div class="router__wrapper">
      <router-link v-bind:to="'/tasks'" v-bind:class="'button_primary'">Вернуться</router-link>
    </div>
    
    <p>Здесь страница детального просмотра</p>
  </main>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    computed: {
      id: function() {
        return this.$route.params.id
      },
      name: function() {
        return this.$route.params.name
      }
    }
  }
</script>