import {useAxios} from '@/api/api';

export const mutation = {
  UPDATE_USERLIST: 'UPDATE_USERLIST',
  UPDATE_USERSETTING: 'UPDATE_USERSETTING',
  UPDATE_USERTOTAL: 'UPDATE_USERTOTAL'
}

export default {
  state() {
    return {  
      list: [],
      totalPage: '',
      setting: {
        page: 1,
        sort: 'desc',
        filter: {},
      }
    }
  },

  getters: {
    userCurrent: state => state.setting.page,
    userList: state => state.list[0],
    userTotal: state => state.totalPage,
  },

  mutations: {
    [mutation.UPDATE_USERLIST]: (state, payload) => {
      state.list = [payload]
    },
    [mutation.UPDATE_USERSETTING]: (state, payload) => {
      state.setting = {...state.setting , ...payload};
    },
    [mutation.UPDATE_USERTOTAL]: (state, payload) => {
      state.totalPage = payload
    },
  },

  actions: {
    setUserSetting: ({dispatch, commit}, value) => {
      commit(mutation.UPDATE_USERSETTING, value)
    },

    updateUserList: async ({dispatch, commit, state, getters}, payload) => {
      const setting = state.setting;

      const list = await useAxios('POST', `users/search`, setting);
      commit(mutation.UPDATE_USERLIST, list.users);
      commit(mutation.UPDATE_USERTOTAL, list.total);
    },
  },
}