import api from '@/api/api.js'

export const mutation = {
	SET_LOADING: 'SET_LOADING',
  SET_DATAPAGE: 'SET_DATAPAGE'
}

export default {
	state() {
		return {
      loading: false,

      datePage: {
        projectPage: {
          currentPage: null,
        }
      }
    }
	},

	getters: {
		loading: state => state.loading,
    datePage: state => state.datePage
	},

	mutations: {
    [mutation.SET_LOADING]: (state, isLoading) => {
      state.loading = isLoading
    },
    [mutation.SET_DATAPAGE]: (state, dataPage) => {
      state.datePage = dataPage
    }
	},

	actions: {
		loading: ({dispatch, commit}, value) => {
      commit(mutation.SET_LOADING, value)
    }
	}
}