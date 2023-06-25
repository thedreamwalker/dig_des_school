<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li v-for="item in list" v-bind:key="item" class="navigation__item"><ButtonItem v-bind:isNavigation="true" v-bind:text="item"></ButtonItem></li>
    </ul>
    <ButtonItem typeIcon="drop_down" v-bind:isUser="true"></ButtonItem>
  </nav>
</template>

<script>
import ButtonItem from '@/components/Button/ButtonItem.vue'

export default {
  data() {
      return {
        title: 'Новое название',
        p: 'Какой-то текст',
        list: ['Проекты', 'Задачи', 'Пользователи'],
      }
  },
  components: {
    ButtonItem,
  }, 
  methods: {
    clickElement: (event) => {
      console.log(this.buttonActive);
      console.log(event);
      
    }
  }
}
</script>

<style src="@/css/base.scss"></style>
<style src="./style.scss"></style>


<!-- // import './style.scss';
// import avatar from '@/assets/img/user-item.png';
// import '@/js/register.js';

// const Navigation = (appContainer, buttons) => {

//   const arrayButtons = buttons;

//   const container = document.createElement('nav');
//   container.classList.add('navigation');
  
//   const list = document.createElement('ul');
//   list.classList.add('navigation__list');

//   arrayButtons.forEach(item => {
//     const li = document.createElement('li');
//     li.classList.add('navigation__item');

//     const button = document.createElement('button');
//     button.classList.add('button_primary');
//     button.textContent = `${item}`;

//     li.append(button);
//     list.append(li);
//   });

//   const user = document.createElement('button');
//       user.classList.add('navigation__user');
//       const img = new Image();
//       img.classList.add('navigation__avatar');
//       img.src = avatar;
//       img.setAttribute('alt', 'аватар пользователя');
//       user.append(img);
//       const svg = `
//       <div class="navigation__icon">
//         <svg>
//           <use href="#drop_down" xlink:href="#drop_down"/>
//         </svg>
//       </div>
//       `;
//       user.insertAdjacentHTML('beforeend', svg);

//   container.append(list);
//   container.append(user);

//   appContainer.append(container);
// }

// export default Navigation; -->