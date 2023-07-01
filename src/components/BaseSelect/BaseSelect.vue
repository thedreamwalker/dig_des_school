<template>
  <div class="select__container">
    <label for="name">Проект <span>*</span></label> <select v-model="model.deliveryTime">
                <option disabled value="">Выберите один из вариантов</option>
                <option>с 9:00 до 22:00</option>
                <option>с 14:00 до 16:00</option>
                <option>с 16:00 до 18:00</option>
            </select>

  </div>
</template>

<script>

export default {
    props: {
        counter: Number
    },
    data() {
        return {
            num: 10,
            // counter: 0

            model: {
                address: '',
                type: '',
                deliveryTime: '',
                selected: []
            }
        }
    },

    computed: {
        btnName() {
            return `Прибавить ${this.num}`
        }
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
<style>

</style>