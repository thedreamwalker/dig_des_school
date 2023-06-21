const url = 'http://45.12.239.156:8081/api';
const login = 'podkolzina.v';
const password = 'jc63fk';

const user = {
  "login": login,
  "password": password
};

/*XMLHttpRequest */
const xhr = new XMLHttpRequest();

const setToken = () => {
  xhr.open('POST', `${url}/login`, true);
  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      sessionStorage.setItem('token', `${xhr.response.token}`);
    }
   };

  xhr.send(JSON.stringify(user));
}

const createProjectUseXMLHttpRequest = async (obj) => {
  
  if (!sessionStorage.getItem('token')) {
    await setToken();
  }

  xhr.open('POST', `${url}/projects`, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log('error', xhr.response);
    } else {
      console.log((xhr.response));
    }
   };

  xhr.send(JSON.stringify(obj));
    
  //console.log(`Загружено: ${xhr.status} ${xhr.response}`);
}





/*Создание*/

/*Изменение*/

/*Вывод*/

/*Удаление*/

export default createProjectUseXMLHttpRequest;