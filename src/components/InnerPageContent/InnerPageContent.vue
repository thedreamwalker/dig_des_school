<template>
  <div class="inner-content__container">
      <h1 class="inner-content__title">
        {{ title }}
      </h1>
  
  <!-- <span>{{counter}}</span>
  <br/>
  <br/>
  <br/>
  <BaseButton @click="send" :name="'Отправить'"/>
  <BaseButton @click="show" :name="'Показать'"/> -->

      <form>
        <BaseInput></BaseInput>
        <BaseTextarea></BaseTextarea>
        <BaseSelect></BaseSelect>
        <BaseSelect></BaseSelect>
        
          <!-- <input  v-model="model.address" placeholder="Адрес:" >

          <div class="form-item">
              <input type="radio" id="a" value="Картой" v-model="model.type">
              <label for="a">Картой</label>
          </div>
          <div class="form-item">
              <input type="radio" id="b" value="Наличными" v-model="model.type">
              <label for="b">Наличными</label>
          </div>
          
          <select v-model="model.deliveryTime">
              <option disabled value="">Выберите один из вариантов</option>
              <option>с 9:00 до 22:00</option>
              <option>с 14:00 до 16:00</option>
              <option>с 16:00 до 18:00</option>
          </select>

          <div class="form-item">
              <input type="checkbox" id="c" value="1" v-model="model.selected">
              <label for="c">какой-то чек-бокс 1</label>
          </div>
          <div class="form-item">
              <input type="checkbox" id="d" value="2" v-model="model.selected">
              <label for="d">какой-то чек-бокс 2</label>
          </div> -->
      </form>
      <div class="inner-content__buttons">
        <BaseButton v-bind:color="'primary'" v-on:clickInput="test($event)" :name="'Прибавить 1'">Создать задачу</BaseButton>
        <BaseButton v-bind:color="'secondary'" @click="add(num)" :name="btnName">Отмена</BaseButton>
      </div>
    </div>
</template>

<script>
  import BaseInput from '@/components/BaseInput/BaseInput.vue'
  import BaseTextarea from '@/components/BaseTextarea/BaseTextarea.vue'
  import BaseSelect from '@/components/BaseSelect/BaseSelect.vue'

  export default {
    props: {
      title: String
    },

    components: {
      BaseInput,
      BaseTextarea,
      BaseSelect
  },
  methods: {
    test: function(button) {
      console.log('приветули');
      console.log(button);
    },
      add(num) {
          // this.counter += 1

          if(num) {
              this.$emit('addFew', num)
          } else {
              this.$emit('addOne')
          }
      },

      send() {
          this.$emit('sendModel', this.model)
      }
    }
}
</script>

<style src="./style.scss"></style>