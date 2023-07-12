<template>
  <main>
    <InnerPageContent v-slot="change"
    v-bind:title="'Создание задачи'">
    <slot>
      <BaseInput 
        v-bind:label="'Название'" 
        v-bind:name="'name'" 
        v-bind:isRequire="true" 
        v-on:dataSend="change.saveData($event)">
      </BaseInput>
      <BaseTextarea
        v-bind:label="'Описание'" 
        v-bind:name="'description'"
        v-on:dataSend="change.saveData($event)">
      </BaseTextarea>
      <BaseSelect
        v-bind:list="['Пример', 'Другой пример', 'Еще один', 'Новый пример', 'Другой пример 2', 'Еще один 2', 'Пример 2']"
        v-bind:label="'Проект'" 
        v-bind:name="'project'"
        v-bind:placeholder="'Не выбран'"
        v-bind:isRequire="true" 
        v-on:dataSend="change.saveData($event)"></BaseSelect>
      <BaseSelect
      v-bind:list="['Пример', 'Другой пример', 'Еще один', 'Новый пример', 'Другой пример 2', 'Еще один 2', 'Пример 2']"
        v-bind:label="'Исполнитель'" 
        v-bind:name="'user'"
        v-bind:placeholder="'Не назначен'"
        v-on:dataSend="change.saveData($event)">
    </BaseSelect>
    </slot>
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