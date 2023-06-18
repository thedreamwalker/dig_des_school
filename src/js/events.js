import dropdown from './dropdown';

document.addEventListener('click', (e) => {
  // для меню навигации
  if (e.target.classList.contains('button_primary') && !e.target.classList.contains('active') && e.target.parentElement.classList.contains('navigation__item')) {
    console.log('есть');
    for (let item of e.target.closest('.navigation__list').children) {
      item.firstChild.classList.remove('active');
    }

    if (!e.target.classList.contains('active')) {
      e.target.classList.add('active');
    }
  }

  const arrayButtons = [document.querySelector('.navigation__user'), ...document.querySelectorAll('.button_small')];


  // для выпадающего меню профиля

  if (e.target.classList.contains('navigation__user') || e.target.parentElement.classList.contains('navigation__user')) {
    const button = e.target.classList.contains('navigation__user') ? e.target : e.target.closest('.navigation__user');
    dropdown(['Профиль', 'Выход'], button);
  }

  // для выпадающего меню для проектов и задач
  if (e.target.classList.contains('button_small')) {
    const button = e.target;
    dropdown(['Редактировать', 'Удалить'], button);
  }

  // закрывать меню
  if (e.target.classList.contains('dropdown__wrapper')) {
    arrayButtons.forEach(button => {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
        button.querySelector('.dropdown__list').remove();
        e.target.remove();
      }
    });
  }
});