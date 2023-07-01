<template>
  <div class="input__container">
    <label for="name">Название <span>*</span></label> <input type="text" id="name" name="user_name" placeholder="Введите текст..." required>
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