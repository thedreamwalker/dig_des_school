// import dropdown from './dropdown';

// const baseClass = 'dropdown__item';
// const editButton = {'Редактировать': [`${baseClass}`]}
// const deleteButton = {'Удалить': [`${baseClass}`, `${baseClass}_delete`]}
// const profileButton = {'Профиль': [`${baseClass}`]}
// const exitButton = {'Выход': [`${baseClass}`]}

// import {useXMLHttpRequest, useFecth, useAxios} from '@/js/api';

// document.addEventListener('click', (e) => {
//      // запросы axios

//      if (e.target.classList.contains('button_project') && e.target.classList.contains('button_axios')) {
//       if (e.target.classList.contains('button_create')) {
//         useAxios('POST', 'projects', 'createProject');
//       } else if (e.target.classList.contains('button_get')) {
//         useAxios('GET', `projects/${sessionStorage.getItem('projectId')}`);
//       } else if (e.target.classList.contains('button_edit')) {
//         useAxios('PUT', 'projects', 'editProject');
//       } else if (e.target.classList.contains('button_delete')) {
//         useAxios('DELETE', `projects/${sessionStorage.getItem('projectId')}`);
//       }
//     }

//     if (e.target.classList.contains('button_task') && e.target.classList.contains('button_axios')) {
//       if (e.target.classList.contains('button_create')) {
//         useAxios('POST', 'tasks', 'createTask');
//       } else if (e.target.classList.contains('button_get')) {
//         useAxios('GET', `tasks/${sessionStorage.getItem('taskId')}`);
//       } else if (e.target.classList.contains('button_edit')) {
//         useAxios('PUT', 'tasks', 'editTask');
//       } else if (e.target.classList.contains('button_delete')) {
//         useAxios('DELETE', `tasks/${sessionStorage.getItem('taskId')}`);
//       }
//     }
//   }
// });