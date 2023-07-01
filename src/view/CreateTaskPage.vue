<template>
  <main>
    <InnerPageContent
    v-bind:title="'Создание задачи'">
  </InnerPageContent>
  </main>
</template>

<script>
  import InnerPageContent from '@/components/InnerPageContent/InnerPageContent.vue';

  export default {
  components: {
    InnerPageContent,
  },
}
</script>