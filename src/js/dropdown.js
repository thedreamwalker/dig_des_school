const dropdown = (items, button) => {
    if (!button.classList.contains('active')) {
      button.classList.add('active');
      setList(items, button);
      // if (!document.body.querySelector('.dropdown__wrapper')) {
      //   const wrapper = document.createElement('div');
      //   wrapper.classList.add('dropdown__wrapper')
      //   document.body.append(wrapper);
      // }
      
    } else {
      button.classList.remove('active');
      button.querySelector('.dropdown__list').remove();



      //document.body.querySelector('.dropdown__wrapper').remove();
    }
  }

  const setList = (items, parent) => {
    const dropdownList = document.createElement('ul');
    dropdownList.classList.add('dropdown__list');
    items.forEach(item => {
      const dropdownItem = document.createElement('li');

      for (const key in item) {
        dropdownItem.classList.add(...item[key]);
        dropdownItem.innerHTML = `<p>${key}</p>`;
        }

      dropdownList.append(dropdownItem);
    });
    
    parent.append(dropdownList);
  }

export default dropdown;