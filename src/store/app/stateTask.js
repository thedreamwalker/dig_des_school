import {useAxios} from '@/api/api';

export const mutation = {
  UPDATE_TASKLIST: 'UPDATE_TASKLIST',
  UPDATE_TASKSETTING: 'UPDATE_TASKSETTING'
}

export default {
  state() {
    return {  
      list: [],
      setting: {
        page: 1,
        totalPage: '',
        sort: {
          field: 'dateCreated',
          type: 'desc',
        },
        filter: {},
      }
    }
  },

  getters: {
    taskCurrent: state => state.setting.currentPage,
    taskList: state => state.list[0],
    taskTotal: state => state.setting.totalPage,
  },

  mutations: {
    [mutation.UPDATE_TASKLIST]: (state, payload) => {
      state.list = [payload]
    },
    [mutation.UPDATE_TASKSETTING]: (state, payload) => {
      state.setting = payload;
    },
  },

  actions: {
    setTaskSetting: ({dispatch, commit}, value) => {
      commit(mutation.UPDATE_TASKSETTING, value)
    },

    updateTaskList: async ({dispatch, commit, state, getters}, payload) => {
      const setting = state.setting;

      const list = await useAxios('POST', `tasks/search`, setting);
      commit(mutation.UPDATE_TASKLIST, list.tasks);
    },
  },
}