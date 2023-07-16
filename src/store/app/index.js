import {useAxios} from '@/api/api';

export const mutation = {
	SET_AUTH: 'SET_AUTH',
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
		[mutation.SET_AUTH]: (state, token) => {
			console.log(token)
      localStorage.setItem('token', token);
    },
    [mutation.SET_LOADING]: (state, isLoading) => {
      state.loading = isLoading
    },
	},

	actions: {
		setAuth: async ({dispatch, commit}, value) => {
			await useAxios('POST', `login`, value)
			.then(token => commit(mutation.SET_AUTH, token.token));
      
    },
		setLoading: ({dispatch, commit}, value) => {
      commit(mutation.SET_LOADING, value)
    }
	}
}