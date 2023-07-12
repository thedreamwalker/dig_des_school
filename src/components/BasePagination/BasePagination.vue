<template>
  <div class="pagination__wrapper">
    <ul class="pagination__buttons">
      <li class="pagination__item">
        <BaseButton 
        v-bind:customClick="changePage" 
        v-bind:color="'secondary'" 
        v-bind:typeIcon="'button_left'" 
        v-bind:parent="'back'" 
        v-bind:disabled="this.currentPage < 2">
      </BaseButton>
      </li>
      <li v-for="item in setPage" class="pagination__item" v-bind:key="item">
        <BaseButton 
        v-bind:customClick="changePage" 
        v-bind:class="{active: currentPage === item}" 
        v-bind:color="'secondary'" 
        v-bind:parent="'item'" 
        v-bind:text="item.toString()">
      </BaseButton></li>
      <li class="pagination__item">
        <BaseButton 
        v-bind:customClick="changePage" 
        v-bind:color="'secondary'" 
        v-bind:typeIcon="'button_right'" 
        v-bind:parent="'next'"
        v-bind:disabled="this.currentPage === this.allPages"></BaseButton>
      </li>
    </ul>
    <div class="pagination__input">
        <p>Перейти к странице</p>
        <BaseInput v-bind:placeholder="' '" v-bind:type="'pagination'" v-bind:customFunction="setInput"></BaseInput>
      </div>
      <div class="pagination__info">
        <p>{{setArea}} {{ setType }}; всего {{ this.allPages.toString() }} страниц </p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    currentNumberPage: {
      type: Number,
      required: true
    },
    allPages: {
      type: Number,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    update: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      currentPage: this.currentNumberPage,
      nextPage: null,
      previousPage: null,
      all: this.allPages,
      list: [],
    }
  },
  computed: {

    setType: function() {
      return this.type;
    },

    setPage: function() {
      let list;
      if (this.currentPage === 1) {
      list = [this.currentPage, this.currentPage + 1, this.currentPage + 2]
    } else if (this.currentPage === this.all) {
      list = [this.currentPage - 2, this.currentPage - 1, this.currentPage]
    } else {
      list = [this.currentPage - 1, this.currentPage, this.currentPage + 1]
    }

    return list;
    },

    setArea: function() {
      if (this.currentPage === 1) {
        return `${this.currentPage}-${this.currentPage}${this.data.length < 10 ? this.data.length : 0}`
      } else {
        return `${this.currentPage - 1}1-${this.currentPage}${this.data.length < 10 ? this.data.length : 0}`
      }
    }
  },
    methods: {
    changePage: async function(e) {
      if (!e.target.closest('.button_back') && !e.target.closest('.button_next')) {
        this.currentPage = Number(e.target.textContent)
      } else if (e.target.closest('.button_back')) {
        this.currentPage = this.currentPage - 1;
      } else {
        this.currentPage = this.currentPage + 1; 
      }

      await this.$store.commit('SET_PROJECTCURRENT', this.currentPage);
      await this.$store.dispatch('updateProjectList');
      this.update();
    },
    
    setInput: async function(value) {
      if (value < 1) {
        this.currentPage = 1;
      } else if (value > this.allPages) {
        this.currentPage = this.allPages;
      } else {
        this.currentPage = Number(value);
      }

      await this.$store.commit('SET_PROJECTCURRENT', this.currentPage);
      await this.$store.dispatch('updateProjectList');
      this.update();
    }
  }
}

</script>

<style src="./style.scss"></style>