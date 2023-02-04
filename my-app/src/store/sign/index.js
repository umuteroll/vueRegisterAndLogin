import actions from './sign.actions';
import mutations from './sign.mutations';
import getters from './sign.getters';
import state from './sign.state';
export default {
  state,
  actions,
  mutations: {
    ...mutations,
  },
  getters: {
    ...getters,
  },
};