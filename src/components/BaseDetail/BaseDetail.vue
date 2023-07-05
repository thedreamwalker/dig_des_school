<template>
  <div>
    <div class="router__wrapper">
      <router-link v-bind:to="`/${parent}s`" v-bind:class="'button_primary'">Вернуться</router-link>
    </div>
    
    <p>Здесь страница детального просмотра {{ data.id }} {{ data.name }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object,
      parent: String
    },
  }
</script>