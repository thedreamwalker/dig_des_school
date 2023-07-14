import {useAxios} from '@/api/api';

export const mutation = {

  SET_TASKCURRENT: 'SET_TASKCURRENT',
  UPDATE_TASKLIST: 'UPDATE_TASKLIST',
  SET_TASKTOTAL: 'SET_TASKTOTAL',
  SET_TASKSORT: 'SET_TASKSORT',
  SET_TASKSORTTYPE: 'SET_TASKSORTTYPE',
  SET_TASKSEARCH: 'SET_TASKSEARCH',
}

export default {
  state() {
    return {  
      currentPage: 1,
      list: [],
      totalPage: '',
      sort: 'dateCreated',
      sort_type: 'desc',
      filter: {},
    }
  },

  getters: {
    taskCurrent: state => state.currentPage,
    taskList: state => state.list[0],
    taskTotal: state => state.totalPage,
  },

  mutations: {
    [mutation.SET_TASKCURRENT]: (state, payload) => {
      state.currentPage = payload
    },
    [mutation.UPDATE_TASKLIST]: (state, payload) => {
      state.list = [payload]
    },
    [mutation.SET_TASKTOTAL]: (state, payload) => {
      state.totalPage = payload
    },
    [mutation.SET_TASKSORT]: (state, payload) => {
      state.sort = payload
    },
    [mutation.SET_TASKSORTTYPE]: (state, payload) => {
      state.sort_type = payload
    },
    [mutation.SET_TASKSEARCH]: (state, payload) => {
      state.filter = payload
    }
  },

  actions: {
    setTaskCurrent: ({dispatch, commit}, value) => {
      commit(mutation.SET_TASKCURRENT, value)
    },

    setTaskSort: ({dispatch, commit}, value) => {
      commit(mutation.SET_TASKSORT, value)
    },

    setTaskSortType: ({dispatch, commit}, value) => {
      commit(mutation.SET_TASKSORTTYPE, value)
    },

    setTaskSearch: ({dispatch, commit}, value) => {
      commit(mutation.SET_TASKSEARCH, value)
    },

    updateTaskList: async ({dispatch, commit, state, getters}, payload) => {
      const curr = state.currentPage;
      const sort = state.sort;
      const sortType = state.sort_type;
      const filterObj = state.filter;

      const list = await useAxios('POST', `tasks/search`, {page: curr, filter: filterObj, sort: {field: sort, type: sortType}});
      commit(mutation.SET_TASKTOTAL, list.total);
      commit(mutation.UPDATE_TASKLIST, list.tasks);
    },
  },
}
