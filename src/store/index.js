import Vue from 'vue'
import Vuex from 'vuex'

import app from './app/index'
import stateProject from './app/stateProject'
import stateTask from './app/stateTask'
import stateUser from './app/stateUser'

Vue.use(Vuex)

export const mutation = {
}

const store = () => {
	return new Vuex.Store({
		modules: {
			app, 
      stateProject,
      stateTask,
			stateUser,
		}
	})
}

export default store