import {useAxios} from '@/api/api';

export const mutation = {

  SET_PROJECTCURRENT: 'SET_PROJECTCURRENT',
  UPDATE_PROJECTLIST: 'UPDATE_PROJECTLIST',
  SET_PROJECTTOTAL: 'SET_PROJECTTOTAL',
  SET_PROJECTSORT: 'SET_PROJECTSORT',
  SET_PROJECTSORTTYPE: 'SET_PROJECTSORTTYPE',
  SET_PROJECTSEARCH: 'SET_PROJECTSEARCH',
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
    projectCurrent: state => state.currentPage,
    projectList: state => state.list[0],
    projectTotal: state => state.totalPage,
  },

  mutations: {
    [mutation.SET_PROJECTCURRENT]: (state, payload) => {
      state.currentPage = payload
    },
    [mutation.UPDATE_PROJECTLIST]: (state, payload) => {
      state.list = [payload]
    },
    [mutation.SET_PROJECTTOTAL]: (state, payload) => {
      state.totalPage = payload
    },
    [mutation.SET_PROJECTSORT]: (state, payload) => {
      state.sort = payload
    },
    [mutation.SET_PROJECTSORTTYPE]: (state, payload) => {
      state.sort_type = payload
    },
    [mutation.SET_PROJECTSEARCH]: (state, payload) => {
      state.filter = payload
    }
  },

  actions: {
    setProjectCurrent: ({dispatch, commit}, value) => {
      commit(mutation.SET_PROJECTCURRENT, value)
    },

    setProjectSort: ({dispatch, commit}, value) => {
      commit(mutation.SET_PROJECTSORT, value)
    },

    setProjectSortType: ({dispatch, commit}, value) => {
      commit(mutation.SET_PROJECTSORTTYPE, value)
    },

    setProjectSearch: ({dispatch, commit}, value) => {
      commit(mutation.SET_PROJECTSEARCH, value)
    },

    updateProjectList: async ({dispatch, commit, state, getters}, payload) => {
      const curr = state.currentPage;
      const sort = state.sort;
      const sortType = state.sort_type;
      const filterObj = state.filter;

      const list = await useAxios('POST', `projects/search`, {page: curr, filter: filterObj, sort: {field: sort, type: sortType}});
      commit(mutation.SET_PROJECTTOTAL, list.total);
        commit(mutation.UPDATE_PROJECTLIST, list.projects);
    },
  },
}
