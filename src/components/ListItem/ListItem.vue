<template>
  <div class="item">
    <div class="item__container">
      <div class="item__title">
        <p class="item__name"> 
          <router-link v-bind:to="{name: detailPage, params: {id: item._id, item: item, parent: itemType}}">{{ item.name }}</router-link>
          
        </p>
        <img v-if="itemType === 'task'" class="item__avatar" src="@/assets/img/user-item.jpg" alt="аватар пользователя">
      </div>
      <div class="item__details">
        <p v-if="item.code" class="item__code"># {{ item.code }}</p>
        <p v-if="item.number" class="item__number"># {{ item.number }}</p>
        <p class="item__author">{{ this.author.name }} создал {{ setDateCreated }}</p>
        <BaseStatus v-if="itemType === 'task'" v-bind:statusName="setStatusName" v-bind:status="setStatusClass"></BaseStatus>
        <p class="item__last-change">{{ setDateEdited }}</p>
      </div>
    </div>
    <BaseDropdown v-bind:typeIcon="'dots'" v-bind:parent="'item'" v-bind:color="'secondary'" v-bind:list="[{name: 'Редактировать', link: '/edit'}, {name: 'Удалить', link: '/delete', subClass: 'delete'}]"></BaseDropdown>
  </div>
</template>

<script>
import {taskStatusName, taskStatusClass} from '@/components/BaseStatus/statuses'
import {useAxios} from '@/api/api';

export default {
  props: {
    itemType: String,
    item: Object,
  },

  data() {
    return {
      author: Object,
    }
  },
  
  async created() {
    const user = await this.getAuthor();
    this.author = user;
  },

  computed: {
    detailPage: function() {
      return `${this.itemType[0].toUpperCase()}${this.itemType.slice(1)}DetailPage`;
    },

    setStatusName: function() {
      return taskStatusName[this.item.status];
    },

    setStatusClass: function() {
      return taskStatusClass[this.item.status];
    },

    setDateCreated: function() {
      return this.setDate(this.item.dateCreated)
    },

    setDateEdited: function() {
      return this.setDate(this.item.dateEdited)
    }
  },

  methods: {
    getAuthor: async function() {
      const currentUser = await useAxios('POST', `/users/search`, {
    "filter": {
        "_id": this.item.author
    }});
      return currentUser.users[0];
    },

    calculateDifference: function (ms) {

      let days, hours, minutes;

      days = Math.floor(ms / 1000 / 60 / 60 / 24);
      hours = Math.floor(ms / 1000 / 60 / 60 % 24);
      minutes = Math.floor(ms / 1000 / 60 % 60);

      return {
        'ms': ms,
        'days': days,
        'hours': hours,
        'minutes': minutes,
      };
    },

    setDate: function(date) {

      if (!date) {
        return null;
      }

      const formatterHM = new Intl.DateTimeFormat("ru", { hour: 'numeric', minute: "numeric" });
      const formatterDM = new Intl.DateTimeFormat("ru", {day: 'numeric', month: 'short'});
      const formatterDMY = new Intl.DateTimeFormat("ru", {day: 'numeric', month: 'short', year: 'numeric'});

      let text = '';

      const old = new Date(date);
      const now = new Date();

      const difference = this.calculateDifference((Date.parse(now) - (Date.parse(old))));

      if (old.getFullYear() !== now.getFullYear()) {
        text = `${formatterDMY.format(old)} в ${formatterHM.format(old)}`;
      } else
      if (difference.days > 1 || difference.days === 1) {
        text = difference.days === 1 ? `вчера в ${formatterHM.format(old)}` : `${formatterDM.format(old)} в ${formatterHM.format(old)}`;
      } else
      if (difference.hours) {
        text = difference.hours < 4 ? `${difference.hours + 1} часа назад` : `сегодня в ${formatterHM.format(old)}`
      }
      else {
        text = difference.minutes > 0 ? `${difference.minutes + 1} минуты назад` : `1 минуту назад`;
      }

      return text;
      },
  }
}
</script>

<style src="./style.scss"></style>