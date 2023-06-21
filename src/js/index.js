import Stub from '@/components/Stub/Stub';
import Navigation from '@/components/Navigation/Navigation';
import ProjectItem from '@/components/ProjectItem/ProjectItem';
import TaskItem from '@/components/TaskItem/TaskItem';
import useXMLHttpRequest from '@/js/api';

import './events';

const appContainer = document.querySelector('#app');
const arrNavigation = ['Проекты', 'Задачи', 'Пользователи'];
const testObj = {
  'name': 'Пример названия проекта',
  'code': '54484'
}

const render = (appContainer) => {
  Navigation(appContainer, arrNavigation);
  ProjectItem(appContainer);
  TaskItem(appContainer);
  Stub(appContainer, 'project');
  Stub(appContainer, 'task');
  useXMLHttpRequest(testObj);
}

render(appContainer);