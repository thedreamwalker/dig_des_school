<template>
    <main>
      <Stub v-if="list.length === 0" v-bind:type="'project'"></Stub>
      <ListItem v-for="project in list" v-bind:key="project.item.code" v-bind:itemType="project[itemType]"
      v-bind:item="project.item"></ListItem>
    </main>
</template>

<script>
import ListItem from '@/components/ListItem/ListItem.vue';
import Stub from '@/components/BaseStub/BaseStub.vue'

export default {
  data() {
      return {
        list: [{itemType: 'project', item: {name: 'Длинное название', code: '12', author: 'Иванов И.И. создал 1 час назад', change: 'Баранов А.А. изменил 9 минут назад'}}, 
        {itemType: 'project', item: {name: 'Другое еще более длинное название', code: '512', author: 'НеИванов И.И. создал 3 часа назад', change: 'НеБаранов А.А. изменил 19 минут назад'}}],
      }
  },

  components: {
    ListItem,
    Stub
  },
}
</script>

<style>

</style>