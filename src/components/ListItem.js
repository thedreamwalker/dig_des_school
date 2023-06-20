import avatar from '../assets/img/user-item.png';

class ListItem {
  constructor(appContainer, type, name, code, author, lastchange) {
    this.appContainer = appContainer;
    this.type = type;
    this.name = name;
    this.code = code;
    this.author = author;
    this.lastchange = lastchange;
  }

  render() {

    const newElement = (tag, someClass, inner) => {
      const element = document.createElement(`${tag}`);
      element.classList.add(`${someClass}`);
      element.innerHTML = `${inner}`;

      return element;
    };

    const div = document.createElement('div');
    div.classList.add('item');
    const container = document.createElement('div');
    container.classList.add('item__container');

    const name = newElement('p', 'item__name', this.name);

    if (this.type === 'project') {
      container.append(name);
    } else if (this.type === 'task') {
      const div = document.createElement('div');
      div.classList.add('item__title');
      div.append(name);
      const img = new Image();
      img.classList.add('item__avatar');
      img.src = avatar;
      img.setAttribute('alt', 'аватар пользователя');
      div.append(img);
      
      container.append(div);
    }

    const details = document.createElement('div');
    details.classList.add('item__details');
    container.append(details);

    const code = newElement('p', 'item__code', this.code);
    details.append(code);

    const author = newElement('p', 'item__author', this.author);
    details.append(author);

    if (this.type === 'task') {
      const button = document.createElement('button');
      button.classList.add('item__status', 'item__status_in-work');
      button.textContent = 'Черновик';
      details.append(button);
    }

    const lastchange = newElement('p', 'item__last-change', this.lastchange);
    details.append(lastchange);


    const button = document.createElement('button');
    button.classList.add('button_secondary', 'button_small');

    div.append(container);
    div.append(button);
    this.appContainer.append(div);
  }
}

export default ListItem;