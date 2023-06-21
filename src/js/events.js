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
  
  if (e.target.classList.contains('button_small')) {
    const button = e.target;

    if (checkArray.length === 0 || checkArray[0] === e.target) {
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
});