<template>
  <div class="textaria__container">
    <label for="name">Описание</label> <textarea id="description" name="description" placeholder="Введите текст..."></textarea>
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