const axios = require('axios').default;
axios.defaults.headers.common.accept = 'application/json';
const url = 'http://45.12.239.156:8081/api';
const login = 'podkolzina.v';
const password = 'jc63fk';

const user = {
  "login": login,
  "password": password
};

const setToken = async (callback, request, type, obj) => {
  return axios({
    method: 'post',
    url: `${url}/login`,
    data: user
  })
  .then(data => {
    localStorage.setItem('token', `${data.data.token}`);
    callback(request, type, obj);
  })
  .catch(err => console.log(err));
}

const useAxios = async (request, type, obj) => {
  // switch (obj) {
  //   case 'createProject':
  //     obj = {
  //       'name': 'Пример названия проекта',
  //       'code': '54484'
  //     }
  //     break;
  //   case 'editProject':
  //     obj = {
  //       '_id': sessionStorage.getItem('projectId'),
  //       'name': 'Пример другого названия проекта'
  //     };
  //     break;
  //   case 'createTask':
  //     obj = {
  //       "name": "Пример задачи",
  //       "description": "Какое-то подробное или не очень описание задачи",
  //       "projectId": sessionStorage.getItem('projectId'),
  //       "executor": "648af17a7287972ce8676ed6"
  //   };
  //     break;
  //   case 'editTask':
  //     obj = {
  //       '_id': sessionStorage.getItem('taskId'),
  //       'name': 'Новое название задачи',
  //     };
  //     break;
  // }

  const sendAxios = () => {

    return axios({
      method: request,
      url: `${url}/${type}`,
      data: obj,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(data => {
      data = data.data
      // if (data._id) {
      //   data.projectId ? sessionStorage.setItem('taskId', `${data._id}`) : sessionStorage.setItem('projectId', `${data._id}`);
      // }
      // if (data._id) {
      //   data.projectId ? sessionStorage.setItem('taskId', `${data._id}`) : sessionStorage.setItem('projectId', `${data._id}`);
      // } else {
      //   type.replace(/\/.+/,"") === 'projects' ? sessionStorage.removeItem('projectId') : sessionStorage.removeItem('taskId');
      // }
      return data;
    })
    .catch(err => console.log(err));
  }

  // console.log( await sendAxios(request, type, obj));
  // return await typeof sessionStorage.getItem('token') === "object" ? setToken(sendAxios, request, type, obj) : sendAxios(request, type, obj);
  
  if (!localStorage.getItem('token')) {
    await setToken(sendAxios, request, type, obj);
  }

  return await sendAxios(request, type, obj);
}

export {useAxios, setToken};