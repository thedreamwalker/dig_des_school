import Vue from 'vue'
import Vuex from 'vuex'

import app from './app'
import {useAxios} from '@/api/api';

Vue.use(Vuex)

export const mutation = {
  SET_PROJECTCURRENT: 'SET_PROJECTCURRENT',
  UPDATE_PROJECTLIST: 'UPDATE_PROJECTLIST',
  SET_PROJECTTOTAL: 'SET_PROJECTTOTAL',

  SET_TASKCURRENT: 'SET_TASKCURRENT',
  UPDATE_TASKLIST: 'UPDATE_TASKLIST',
  SET_TASKTOTAL: 'SET_TASKTOTAL',
  SET_TASKSORT: 'SET_TASKSORT',
  SET_TASKSORTTYPE: 'SET_TASKSORTTYPE',
  SET_TASKSEARCH: 'SET_TASKSEARCH',
}

const store = () => {
	return new Vuex.Store({
    state() {
      return {  
        projectPage: {
          currentPage: 1,
          list: [],
          totalPage: '',
          sort: 'dateCreated',
          sort_type: 'desc',
          filter: {},
        },
        taskPage: {
          currentPage: 1,
          list: [],
          totalPage: '',
          sort: 'dateCreated',
          sort_type: 'desc',
          filter: {},
        }
      }
    },
  
    getters: {
      projectCurrent: state => state.projectPage.currentPage,
      projectList: state => state.projectPage.list[0],
      projectTotal: state => state.projectPage.totalPage,

      taskCurrent: state => state.taskPage.currentPage,
      taskList: state => state.taskPage.list[0],
      taskTotal: state => state.taskPage.totalPage,
    },
  
    mutations: {
      [mutation.SET_PROJECTCURRENT]: (state, payload) => {
        state.projectPage.currentPage = payload
      },
      [mutation.UPDATE_PROJECTLIST]: (state, payload) => {
        state.projectPage.list = [payload]
      },
      [mutation.SET_PROJECTTOTAL]: (state, payload) => {
        state.projectPage.totalPage = payload
      },

      [mutation.SET_TASKCURRENT]: (state, payload) => {
        state.taskPage.currentPage = payload
      },
      [mutation.UPDATE_TASKLIST]: (state, payload) => {
        state.taskPage.list = [payload]
      },
      [mutation.SET_TASKTOTAL]: (state, payload) => {
        state.taskPage.totalPage = payload
      },
      [mutation.SET_TASKSORT]: (state, payload) => {
        state.taskPage.sort = payload
      },
      [mutation.SET_TASKSORTTYPE]: (state, payload) => {
        state.taskPage.sort_type = payload
      },
      [mutation.SET_TASKSEARCH]: (state, payload) => {
        state.taskPage.filter = payload
      }
    },
  
    actions: {
      setProjectCurrent: ({dispatch, commit}, value) => {
        commit(mutation.SET_PROJECTCURRENT, value)
      },

      updateProjectList: async ({dispatch, commit, state}, payload) => {
        const curr = state.projectPage.currentPage;
        const sort = state.projectPage.sort;
        const sortType = state.projectPage.sort_type;
        const filterObj = state.projectPage.filter;

        const list = await useAxios('POST', `projects/search`, {page: curr, filter: filterObj, sort: {field: sort, type: sortType}});
        commit(mutation.SET_PROJECTTOTAL, list.total);
        commit(mutation.UPDATE_PROJECTLIST, list.projects);
      },

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
        const curr = state.taskPage.currentPage;
        const sort = state.taskPage.sort;
        const sortType = state.taskPage.sort_type;
        const filterObj = state.taskPage.filter;

        const list = await useAxios('POST', `tasks/search`, {page: curr, filter: filterObj, sort: {field: sort, type: sortType}});
        commit(mutation.SET_TASKTOTAL, list.total);
        commit(mutation.UPDATE_TASKLIST, list.tasks);
      },

    },

		modules: {
			app
		}
	})
}

export default store