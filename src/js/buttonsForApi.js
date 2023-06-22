const buttonName = {'xml': 'с XML', 'fetch': 'с Fetch', 'axios': 'с Axios'};
const action = {'create': 'Создать', 'get': 'Получить', 'edit': 'Редактировать', 'delete': 'Удалить'};

const createButtons = (parent, type) => {
  const container = document.createElement('div');
  container.classList.add('api-buttons');
  const h2 = document.createElement('h2');
  h2.innerHTML = type;
  container.append(h2);

  for (let elem in action) {
    const row = document.createElement('div');
    row.classList.add('api-buttons__row');
    const h2 = document.createElement('h2');
    h2.textContent = action[elem];
    row.append(h2);
    
    for (let request in buttonName) {
      const button = document.createElement('button');
      button.classList.add('button_primary', `button_${type}`, `button_${request}`, `button_${elem}`);
      button.textContent = `${action[elem]} ${buttonName[request]}`;
      row.append(button);
    }
    container.append(row);
    parent.append(container);
  }

 

  // action.forEach(action => {
  //   const row = document.createElement('div');
  //   row.classList.add('api-buttons__row');

  //   const h2 = document.createElement('h2');
  //   h2.textContent = action;
  //   row.append(h2);

  //   for (let i = 0; i < buttonName.length; i++) {
  //     const button = document.createElement('button');
  //     button.classList.add('button_primary', `button_${type}`, `button_${type}`);
  //   }
  // });
};

export default createButtons;