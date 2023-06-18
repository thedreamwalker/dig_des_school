const dropdown = (items, button) => {
  console.log(button);

    if (!button.classList.contains('active')) {
      button.classList.add('active');
      setList(items, button);
      if (!document.body.querySelector('.dropdown__wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('dropdown__wrapper')
        document.body.append(wrapper);
      }
      
    } else {
      button.classList.remove('active');
      button.querySelector('.dropdown__list').remove();
      document.body.querySelector('.dropdown__wrapper').remove();
    }
  }

  const setList = (items, parent) => {
    const dropdownList = document.createElement('ul');
    dropdownList.classList.add('dropdown__list');
    items.forEach(item => {
      const dropdownItem = document.createElement('li');
      if (item === 'Удалить') {
        dropdownItem.classList.add('dropdown__item', 'dropdown__item_delite');
      } else {
        dropdownItem.classList.add('dropdown__item');
      }
      dropdownItem.innerHTML = `<p>${item}</p>`;
      dropdownList.append(dropdownItem);
    });
    
    parent.append(dropdownList);
  }

export default dropdown;