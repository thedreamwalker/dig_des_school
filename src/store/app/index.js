export const mutation = {
	SET_LOADING: 'SET_LOADING',
}

export default {
	state() {
		return {
      loading: false,
    }
	},

	getters: {
		loading: state => state.loading,
	},

	mutations: {
    [mutation.SET_LOADING]: (state, isLoading) => {
      state.loading = isLoading
    }
	},

	actions: {
		loading: ({dispatch, commit}, value) => {
      commit(mutation.SET_LOADING, value)
    }
	}
}