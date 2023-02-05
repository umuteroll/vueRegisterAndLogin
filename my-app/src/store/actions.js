import {
  SET_SIGN_USER,
  FETCH_SIGN_USER,
  SET_SIGN_USER_REQUEST,
  FETCH_SIGN_USER_REQUEST,
} from './constants';
import signService from '../services/signService';
export default {
  async [FETCH_SIGN_USER]({ commit }, param) {
    let response;
    if (param.type === 'login') {
      response = await signService.getUserInfoByEmail(param.data.email);
    }
    else {
      delete param.data['type'];
      response = await signService.createUser(param.data);
    }
    commit(SET_SIGN_USER, response);
  },
  async [FETCH_SIGN_USER_REQUEST]({ commit }, param) {
    commit(SET_SIGN_USER_REQUEST, param);
  },
};