<template>
  <main>
    <InnerPageContent v-slot="change"
    v-bind:title="'Создание задачи'">
    <slot>
      <BaseInput 
        v-bind:label="'Название'" 
        v-bind:name="'name'" 
        v-bind:isRequire="true" 
        v-on:customEvent="change.saveData($event)">
      </BaseInput>
      <BaseTextarea
        v-bind:label="'Описание'" 
        v-bind:name="'description'"
        v-on:customEvent="change.saveData($event)">
      </BaseTextarea>
      <BaseSelect
        v-bind:type="'form'"
        v-bind:list="listProjects"
        v-bind:label="'Проект'" 
        v-bind:name="'project'"
        v-bind:placeholder="'Не выбран'"
        v-bind:isRequire="true" 
        v-on:customEvent="change.saveData($event)"></BaseSelect>
      <BaseSelect
        v-bind:type="'form'"
        v-bind:list="listUsers"
        v-bind:label="'Исполнитель'" 
        v-bind:name="'user'"
        v-bind:placeholder="'Не назначен'"
        v-on:customEvent="change.saveData($event)">
    </BaseSelect>
    </slot>
  </InnerPageContent>
  </main>
</template>

<script>
  import InnerPageContent from '@/components/InnerPageContent/InnerPageContent.vue';
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['userList', 'projectList']),

      listUsers: function() {
        if (!this.userList) {
          return [];
        } 
        return this.userList;
      },

      listProjects: function() {
        if (!this.projectList) {
          return [];
        } 
        return this.projectList;
      },
    },

    components: {
      InnerPageContent,
    },
}
</script>