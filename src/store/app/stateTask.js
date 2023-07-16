import {useAxios} from '@/api/api';

export const mutation = {
  UPDATE_TASKLIST: 'UPDATE_TASKLIST',
  UPDATE_TASKSETTING: 'UPDATE_TASKSETTING',
  UPDATE_TASKTOTAL: 'UPDATE_TASKTOTAL'
}

export default {
  state() {
    return {  
      list: [],
      totalPage: '',
      setting: {
        page: 1,
        sort: {
          field: 'dateCreated',
          type: 'desc',
        },
        filter: {},
      }
    }
  },

  getters: {
    taskCurrent: state => state.setting.page,
    taskList: state => state.list[0],
    taskTotal: state => state.totalPage,
  },

  mutations: {
    [mutation.UPDATE_TASKLIST]: (state, payload) => {
      state.list = [payload]
    },
    [mutation.UPDATE_TASKSETTING]: (state, payload) => {
      state.setting = {...state.setting , ...payload};
    },
    [mutation.UPDATE_TASKTOTAL]: (state, payload) => {
      state.totalPage = payload;
    }
  },

  actions: {
    setTaskSetting: ({dispatch, commit}, value) => {
      commit(mutation.UPDATE_TASKSETTING, value)
    },

    updateTaskList: async ({dispatch, commit, state, getters}, payload) => {
      const setting = state.setting;

      const list = await useAxios('POST', `tasks/search`, setting);
      commit(mutation.UPDATE_TASKLIST, list.tasks);
      commit(mutation.UPDATE_TASKTOTAL, list.total);
    },
  },
}