import './style.scss';
import ListItem from '@/components/ListItem';

const ProjectItem = (appContainer) => {
  new ListItem(appContainer, 'project', 'Название', '#1', 'Иванов И.И. создал 1 час назад', 'Баранов В.В. изменил 1 минуту назад').render();
  new ListItem(appContainer, 'project', 'Другое Название', '#12', 'Иванов В.И. создал 5 часов назад', 'Баранов А.А. изменил 9 минут назад').render();
}

export default ProjectItem;