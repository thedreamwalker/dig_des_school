import Vue from 'vue'
import Vuex from 'vuex'

import app from './app'
import {useAxios} from '@/api/api';

Vue.use(Vuex)

export const mutation = {
  SET_PROJECTCURRENT: 'SET_PROJECTCURRENT',
  UPDATE_PROJECTLIST: 'UPDATE_PROJECTLIST',
  SET_PROJECTTOTAL: 'SET_PROJECTTOTAL'
}

const store = () => {
	return new Vuex.Store({
    state() {
      return {  
        projectPage: {
          currentPage: 1,
          list: [],
          totalPage: ''
        }
      }
    },
  
    getters: {
      projectCurrent: state => state.projectPage.currentPage,
      projectList: state => state.projectPage.list,
      projectTotal: state => state.projectPage.totalPage,
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
      }
    },
  
    actions: {
      setProjectCurrent: ({dispatch, commit}, value) => {
        commit(mutation.SET_PROJECTCURRENT, value)
      },

      updateProjectList: async ({dispatch, commit, state}, payload) => {
        const curr = state.projectPage.currentPage;
        const list = await useAxios('POST', `projects/search`, {page: curr});
        console.log(list)
        commit(mutation.SET_PROJECTTOTAL, list.total);
        commit(mutation.UPDATE_PROJECTLIST, list.projects);
      }

    },

		modules: {
			app
		}
	})
}

export default store