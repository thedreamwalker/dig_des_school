// import Stub from '@/components/Stub/Stub';
// import Navigation from '@/components/Navigation/Navigation';
// import ProjectItem from '@/components/ProjectItem/ProjectItem';
// import TaskItem from '@/components/TaskItem/TaskItem';
// import createButtons from './buttonsForApi';

// import './events';

// const appContainer = document.querySelector('#app');
// const arrNavigation = ['Проекты', 'Задачи', 'Пользователи'];

// const render = (appContainer) => {
//   Navigation(appContainer, arrNavigation);
//   createButtons(appContainer,'project');
//   ProjectItem(appContainer);
//   createButtons(appContainer,'task');
//   TaskItem(appContainer);
//   Stub(appContainer, 'project');
//   Stub(appContainer, 'task');
// }

// render(appContainer);

import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app');