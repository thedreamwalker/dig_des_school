import './style.scss';

const Stub = (type) => {

let description;

  switch (type) {
    case 'project':
      description = 'Не создан ни один проект';
      break;
    case 'task':
      description = 'Не создана ни одна задача';
      break;
    default:
      description = 'В данном разделе ничего нет';
  }

  const container = document.createElement('div');
  container.classList.add('stub__container');
  
  const text = document.createElement('p');
  text.textContent = `${description}`;

  const button = document.createElement('button');
  button.classList.add('button_primary');
  button.textContent = `Добавить`;

  document.body.append(container);
  container.append(text);
  container.append(button);
}

export default Stub;