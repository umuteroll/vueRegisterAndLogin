import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';
import * as constants from './constants';
export default new Vuex.Store({
  state,
  actions,
  mutations: {
    ...mutations,
  },
  getters: {
    ...getters,
  },
  constants,
});