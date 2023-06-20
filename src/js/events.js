import dropdown from './dropdown';

const baseClass = 'dropdown__item';
const editButton = {'Редактировать': [`${baseClass}`]}
const deleteButton = {'Удалить': [`${baseClass}`, `${baseClass}_delete`]}
const profileButton = {'Профиль': [`${baseClass}`]}
const exitButton = {'Выход': [`${baseClass}`]}


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

  // для выпадающего меню профиля

  if (e.target.closest('.navigation__user') && !e.target.closest('.dropdown__list')) {
    const button = e.target.closest('.navigation__user');
    dropdown([profileButton, exitButton], button);
  }

  // для выпадающего меню для проектов и задач
  if (e.target.classList.contains('button_small')) {
    const button = e.target;
    dropdown([editButton, deleteButton], button);
  }

  // закрывать меню
  const arrayButtons = [document.querySelector('.navigation__user'), ...document.querySelectorAll('.button_small')];

  arrayButtons.forEach(button => {
    if (button.classList.contains('active') && !e.target.closest('.navigation__user') && !e.target.closest('.dropdown__list')) {
      button.classList.remove('active');
      button.querySelector('.dropdown__list').remove();
    }
  })
});