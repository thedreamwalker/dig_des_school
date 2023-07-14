import Vue from 'vue'
import Vuex from 'vuex'

import app from './app'
import stateProject from './app/stateProject'
import stateTask from './app/stateTask'

Vue.use(Vuex)

export const mutation = {
}

const store = () => {
	return new Vuex.Store({
		modules: {
			app, 
      stateProject,
      stateTask,
		}
	})
}

export default store