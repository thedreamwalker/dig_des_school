import {useAxios} from '@/api/api';

export const mutation = {
  UPDATE_PROJECTLIST: 'UPDATE_PROJECTLIST',
  UPDATE_PROJECTSETTING: 'UPDATE_PROJECTSETTING',
  UPDATE_PROJECTTOTAL: 'UPDATE_PROJECTTOTAL',
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
    projectCurrent: state => state.setting.page,
    projectList: state => state.list[0],
    projectTotal: state => state.totalPage,
  },

  mutations: {
    [mutation.UPDATE_PROJECTLIST]: (state, payload) => {
      state.list = [payload]
    },
    [mutation.UPDATE_PROJECTSETTING]: (state, payload) => {
      state.setting = {...state.setting , ...payload};
    },
    [mutation.UPDATE_PROJECTTOTAL]: (state, payload) => {
        state.totalPage = payload
      },
  },

  actions: {
    setProjectSetting: ({dispatch, commit}, value) => {
      commit(mutation.UPDATE_PROJECTSETTING, value)
    },

    updateProjectList: async ({dispatch, commit, state, getters}, payload) => {
      const setting = state.setting;

      const list = await useAxios('POST', `projects/search`, setting);
      commit(mutation.UPDATE_PROJECTTOTAL, list.total);
        commit(mutation.UPDATE_PROJECTLIST, list.projects);
    },
  },
}
