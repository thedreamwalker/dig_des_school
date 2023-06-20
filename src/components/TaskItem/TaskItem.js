import './style.scss';
import ListItem from '@/components//ListItem';

const TaskItem = (appContainer) => {
  new ListItem(appContainer, 'task', 'Название', '#1', 'Иванов И.И. создал 1 час назад', 'Баранов В.В. изменил 1 минуту назад').render();
  new ListItem(appContainer, 'task', 'Другое Название', '#123', 'Иванов В.И. создал 5 часов назад', 'Баранов А.А. изменил 9 минут назад').render();
}

export default TaskItem;