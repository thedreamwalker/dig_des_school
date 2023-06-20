import './style.scss';
import avatar from '../../assets/img/user-item.png';

const Navigation = (appContainer, buttons) => {

  const arrayButtons = buttons;

  const container = document.createElement('nav');
  container.classList.add('navigation');
  
  const list = document.createElement('ul');
  list.classList.add('navigation__list');

  arrayButtons.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('navigation__item');

    const button = document.createElement('button');
    button.classList.add('button_primary');
    button.textContent = `${item}`;

    li.append(button);
    list.append(li);
  });

  const user = document.createElement('button');
      user.classList.add('navigation__user');
      const img = new Image();
      img.classList.add('navigation__avatar');
      img.src = avatar;
      img.setAttribute('alt', 'аватар пользователя');
      user.append(img);

  container.append(list);
  container.append(user);

  appContainer.append(container);
}

export default Navigation;