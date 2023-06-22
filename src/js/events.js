import dropdown from './dropdown';

const baseClass = 'dropdown__item';
const editButton = {'Редактировать': [`${baseClass}`]}
const deleteButton = {'Удалить': [`${baseClass}`, `${baseClass}_delete`]}
const profileButton = {'Профиль': [`${baseClass}`]}
const exitButton = {'Выход': [`${baseClass}`]}

import {useXMLHttpRequest, useFecth, useAxios} from '@/js/api';

document.addEventListener('click', (e) => {
  
  // для меню навигации
  if (e.target.classList.contains('button_primary') && !e.target.classList.contains('active') && e.target.parentElement.classList.contains('navigation__item')) {
    for (let item of e.target.closest('.navigation__list').children) {
      item.firstChild.classList.remove('active');
    }

    if (!e.target.classList.contains('active')) {
      e.target.classList.add('active');
    }
  }

  // отслеживаем открыт ли какой-либо элемент
  const arrayButtons = [document.querySelector('.navigation__user'), ...document.querySelectorAll('.button_small')];
  const checkArray = arrayButtons.filter(button => button.classList.contains('active'));

  const closeActive = () => {
    checkArray[0].classList.remove('active');
    checkArray[0].querySelector('.dropdown__list').remove();
  }

  // для выпадающего меню профиля
  if (e.target.closest('.navigation__user') && !e.target.closest('.dropdown__list')) {
    if (checkArray.length > 0 && checkArray[0].classList.contains('button_small')) {
      closeActive();
    }

    const button = e.target.closest('.navigation__user');
    dropdown([profileButton, exitButton], button);
  }

  // для выпадающего меню для проектов и задач
  if (e.target.closest('.button_small')) {
    const button = e.target.closest('.button_small');

    if (checkArray.length === 0 || (checkArray[0] === button && !e.target.closest('.dropdown__list'))) {
      dropdown([editButton, deleteButton], button);
    } else {
      closeActive();
      dropdown([editButton, deleteButton], button);
    }
  }

  // закрывать меню
  arrayButtons.forEach(button => {
    if (button.classList.contains('active') && !e.target.closest('.navigation__user') && !e.target.closest('.dropdown__list') && !e.target.closest('.button_small')) {
      closeActive();
    }
  })


  if (e.target.classList.contains('button_project') || e.target.classList.contains('button_task')) {
      // запросы xml
    if (e.target.classList.contains('button_project') && e.target.classList.contains('button_xml')) {
      if (e.target.classList.contains('button_create')) {
        useXMLHttpRequest('POST', 'projects', 'createProject');
      } else if (e.target.classList.contains('button_get')) {
        useXMLHttpRequest('GET', `projects/${sessionStorage.getItem('projectId')}`);
      } else if (e.target.classList.contains('button_edit')) {
        useXMLHttpRequest('PUT', 'projects', 'editProject');
      } else if (e.target.classList.contains('button_delete')) {
        useXMLHttpRequest('DELETE', `projects/${sessionStorage.getItem('projectId')}`);
      }
    }

    if (e.target.classList.contains('button_task') && e.target.classList.contains('button_xml')) {
      if (e.target.classList.contains('button_create')) {
        useXMLHttpRequest('POST', 'tasks', 'createTask');
      } else if (e.target.classList.contains('button_get')) {
        useXMLHttpRequest('GET', `tasks/${sessionStorage.getItem('taskId')}`);
      } else if (e.target.classList.contains('button_edit')) {
        useXMLHttpRequest('PUT', 'tasks', 'editTask');
      } else if (e.target.classList.contains('button_delete')) {
        useXMLHttpRequest('DELETE', `tasks/${sessionStorage.getItem('taskId')}`);
      }
    }

    
  // запросы fetch

    if (e.target.classList.contains('button_project') && e.target.classList.contains('button_fetch')) {
      if (e.target.classList.contains('button_create')) {
        useFecth('POST', 'projects', 'createProject');
      } else if (e.target.classList.contains('button_get')) {
        useFecth('GET', `projects/${sessionStorage.getItem('projectId')}`);
      } else if (e.target.classList.contains('button_edit')) {
        useFecth('PUT', 'projects', 'editProject');
      } else if (e.target.classList.contains('button_delete')) {
        useFecth('DELETE', `projects/${sessionStorage.getItem('projectId')}`);
      }
    }

    if (e.target.classList.contains('button_task') && e.target.classList.contains('button_fetch')) {
      if (e.target.classList.contains('button_create')) {
        useFecth('POST', 'tasks', 'createTask');
      } else if (e.target.classList.contains('button_get')) {
        useFecth('GET', `tasks/${sessionStorage.getItem('taskId')}`);
      } else if (e.target.classList.contains('button_edit')) {
        useFecth('PUT', 'tasks', 'editTask');
      } else if (e.target.classList.contains('button_delete')) {
        useFecth('DELETE', `tasks/${sessionStorage.getItem('taskId')}`);
      }
    }

     // запросы axios

     if (e.target.classList.contains('button_project') && e.target.classList.contains('button_axios')) {
      if (e.target.classList.contains('button_create')) {
        useAxios('POST', 'projects', 'createProject');
      } else if (e.target.classList.contains('button_get')) {
        useAxios('GET', `projects/${sessionStorage.getItem('projectId')}`);
      } else if (e.target.classList.contains('button_edit')) {
        useAxios('PUT', 'projects', 'editProject');
      } else if (e.target.classList.contains('button_delete')) {
        useAxios('DELETE', `projects/${sessionStorage.getItem('projectId')}`);
      }
    }

    if (e.target.classList.contains('button_task') && e.target.classList.contains('button_axios')) {
      if (e.target.classList.contains('button_create')) {
        useAxios('POST', 'tasks', 'createTask');
      } else if (e.target.classList.contains('button_get')) {
        useAxios('GET', `tasks/${sessionStorage.getItem('taskId')}`);
      } else if (e.target.classList.contains('button_edit')) {
        useAxios('PUT', 'tasks', 'editTask');
      } else if (e.target.classList.contains('button_delete')) {
        useAxios('DELETE', `tasks/${sessionStorage.getItem('taskId')}`);
      }
    }
  }
});