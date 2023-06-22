const axios = require('axios').default;
axios.defaults.headers.common.accept = 'application/json';
const url = 'http://45.12.239.156:8081/api';
const login = 'podkolzina.v';
const password = 'jc63fk';

const user = {
  "login": login,
  "password": password
};

const useXMLHttpRequest = (request, type, obj) => {
  /*XMLHttpRequest */
  const xhr = new XMLHttpRequest();
  switch (obj) {
    case 'createProject':
      obj = {
        'name': 'Пример названия проекта',
        'code': '54484'
      }
      break;
    case 'editProject':
      obj = {
        '_id': sessionStorage.getItem('projectId'),
        'name': 'Пример другого названия проекта'
      };
      break;
    case 'createTask':
      obj = {
        "name": "Пример задачи",
        "description": "Какое-то подробное или не очень описание задачи",
        "projectId": sessionStorage.getItem('projectId'),
        "executor": "648af17a7287972ce8676ed6"
    };
      break;
    case 'editTask':
      obj = {
        '_id': sessionStorage.getItem('taskId'),
        'name': 'Новое название задачи',
      };
      break;
  }

  const setToken = (callback, request, type, obj) => {
  xhr.open('POST', `${url}/login`, true);
  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log('error', xhr.response);
    }  else {
      sessionStorage.setItem('token', `${xhr.response.token}`);
      callback(request, type, obj);
    }
   };

  xhr.send(JSON.stringify(user));
}

const sendXMLHttpRequest = (request, type, obj) => {
  xhr.open(request, `${url}/${type}`, true);
  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log('error', xhr.response);
    } else {
      console.log((xhr.response));
      if (xhr.response._id) {
          xhr.response.projectId ? sessionStorage.setItem('taskId', `${xhr.response._id}`) : sessionStorage.setItem('projectId', `${xhr.response._id}`);
        }
      if (xhr.response._id) {
        xhr.response.projectId ? sessionStorage.setItem('taskId', `${xhr.response._id}`) : sessionStorage.setItem('projectId', `${xhr.response._id}`);
      } else {
        type.replace(/\/.+/,"") === 'projects' ? sessionStorage.removeItem('projectId') : sessionStorage.removeItem('taskId');
      }
    }
   };

  xhr.send(JSON.stringify(obj));
};

typeof sessionStorage.getItem('token') === "object" ? setToken(sendXMLHttpRequest, request, type, obj) : sendXMLHttpRequest(request, type, obj);
}

const useFecth = async (request, type, obj) => {
  switch (obj) {
    case 'createProject':
      obj = {
        'name': 'Пример названия проекта',
        'code': '54484'
      }
      break;
    case 'editProject':
      obj = {
        '_id': sessionStorage.getItem('projectId'),
        'name': 'Пример другого названия проекта'
      };
      break;
    case 'createTask':
      obj = {
        "name": "Пример задачи",
        "description": "Какое-то подробное или не очень описание задачи",
        "projectId": sessionStorage.getItem('projectId'),
        "executor": "648af17a7287972ce8676ed6"
    };
      break;
    case 'editTask':
      obj = {
        '_id': sessionStorage.getItem('taskId'),
        'name': 'Новое название задачи',
      };
      break;
  }

  const setToken = (callback, request, type, obj) => {
    fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
  })
      .then(response => {
          return response.json()
      })
      .then(data => {
        sessionStorage.setItem('token', `${data.token}`);
        callback(request, type, obj);
      })
      .catch(error => console.log('er', error));
  }

  const sendFetch = () => {

    fetch(`${url}/${type}`, {
      method: request,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'Content-type': 'application/json'
      },

      body: JSON.stringify(obj)
  })
      .then(response => {
          return response.json()
      })
      .then(data => {
        console.log(data);
        if (data._id) {
          data.projectId ? sessionStorage.setItem('taskId', `${data._id}`) : sessionStorage.setItem('projectId', `${data._id}`);
        }
      if (data._id) {
        data.projectId ? sessionStorage.setItem('taskId', `${data._id}`) : sessionStorage.setItem('projectId', `${data._id}`);
      } else {
        type.replace(/\/.+/,"") === 'projects' ? sessionStorage.removeItem('projectId') : sessionStorage.removeItem('taskId');
      }})
      .catch(error => console.log('er', error));
  }

  typeof sessionStorage.getItem('token') === "object" ? setToken(sendFetch, request, type, obj) : sendFetch(request, type, obj);
}

const useAxios = async (request, type, obj) => {
  switch (obj) {
    case 'createProject':
      obj = {
        'name': 'Пример названия проекта',
        'code': '54484'
      }
      break;
    case 'editProject':
      obj = {
        '_id': sessionStorage.getItem('projectId'),
        'name': 'Пример другого названия проекта'
      };
      break;
    case 'createTask':
      obj = {
        "name": "Пример задачи",
        "description": "Какое-то подробное или не очень описание задачи",
        "projectId": sessionStorage.getItem('projectId'),
        "executor": "648af17a7287972ce8676ed6"
    };
      break;
    case 'editTask':
      obj = {
        '_id': sessionStorage.getItem('taskId'),
        'name': 'Новое название задачи',
      };
      break;
  }

  const setToken = (callback, request, type, obj) => {
    axios({
      method: 'post',
      url: `${url}/login`,
      data: user
    })
    .then(data => {
      sessionStorage.setItem('token', `${data.data.token}`);
      callback(request, type, obj);
    })
    .catch(err => console.log(err));
  }

  const sendAxios = () => {

    axios({
      method: request,
      url: `${url}/${type}`,
      data: obj,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
    .then(data => {
      data = data.data
      console.log(data);
      if (data._id) {
        data.projectId ? sessionStorage.setItem('taskId', `${data._id}`) : sessionStorage.setItem('projectId', `${data._id}`);
      }
      if (data._id) {
        data.projectId ? sessionStorage.setItem('taskId', `${data._id}`) : sessionStorage.setItem('projectId', `${data._id}`);
      } else {
        type.replace(/\/.+/,"") === 'projects' ? sessionStorage.removeItem('projectId') : sessionStorage.removeItem('taskId');
      }
    })
    .catch(err => console.log(err));
  }

  typeof sessionStorage.getItem('token') === "object" ? setToken(sendAxios, request, type, obj) : sendAxios(request, type, obj);
}

export {useXMLHttpRequest, useFecth, useAxios};