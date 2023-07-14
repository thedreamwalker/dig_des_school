import {useAxios} from '@/api/api';

export const mutation = {

  SET_USERCURRENT: 'SET_USERCURRENT',
  UPDATE_USERLIST: 'UPDATE_USERLIST',
  SET_USERTOTAL: 'SET_USERTOTAL',
  SET_USERSORTTYPE: 'SET_USERSORTTYPE',
  SET_USERSEARCH: 'SET_USERSEARCH',
}

export default {
  state() {
    return {  
      currentPage: 1,
      list: [],
      totalPage: '',
      sort_type: 'desc',
      filter: {},
    }
  },

  getters: {
    userCurrent: state => state.currentPage,
    userList: state => state.list[0],
    userTotal: state => state.totalPage,
  },

  mutations: {
    [mutation.SET_USERCURRENT]: (state, payload) => {
      state.currentPage = payload
    },
    [mutation.UPDATE_USERLIST]: (state, payload) => {
      state.list = [payload]
    },
    [mutation.SET_USERTOTAL]: (state, payload) => {
      state.totalPage = payload
    },
    [mutation.SET_USERSORTTYPE]: (state, payload) => {
      state.sort_type = payload
    },
    [mutation.SET_USERSEARCH]: (state, payload) => {
      state.filter = payload
    }
  },

  actions: {
    setUserCurrent: ({dispatch, commit}, value) => {
      commit(mutation.SET_USERCURRENT, value)
    },

    setUserSortType: ({dispatch, commit}, value) => {
      commit(mutation.SET_USERSORTTYPE, value)
    },

    setUserSearch: ({dispatch, commit}, value) => {
      commit(mutation.SET_USERSEARCH, value)
    },

    updateUserList: async ({dispatch, commit, state, getters}, payload) => {
      const curr = state.currentPage;
      const sortType = state.sort_type;
      const filterObj = state.filter;

      const list = await useAxios('POST', `users/search`, {page: curr, filter: filterObj, sort: sortType});
      commit(mutation.SET_USERTOTAL, list.total);
      commit(mutation.UPDATE_USERLIST, list.users);
    },
  },
}
