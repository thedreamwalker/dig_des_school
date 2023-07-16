const axios = require('axios').default;
axios.defaults.headers.common.accept = 'application/json';
const url = 'http://45.12.239.156:8081/api';

const useAxios = async (request, type, obj) => {
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
      return data;
    })
    .catch(err => console.log(err));
  }

  return await sendAxios(request, type, obj);
}

export {useAxios};