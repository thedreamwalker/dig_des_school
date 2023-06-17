import './style.scss';

const Navigation = (buttons) => {

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

  container.append(list);
  document.body.append(container);
}

export default Navigation;