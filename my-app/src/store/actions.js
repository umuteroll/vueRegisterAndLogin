import {
  SET_SIGN_USER,
  FETCH_SIGN_USER,
  SET_SIGN_USER_REQUEST,
  FETCH_SIGN_USER_REQUEST,
} from './constants';
import signService from '../services/signService';
export default {
  async [FETCH_SIGN_USER]({ commit }, { data, type }) {
    let response;
    if (type === 'GET') {
      response = await signService.getUserInfoByEmail(data.email);
    }
    else {
      delete data['type'];
      response = await signService.createUser(data);
    }
    commit(SET_SIGN_USER, response);
  },
  async [FETCH_SIGN_USER_REQUEST]({ commit }, param) {
    commit(SET_SIGN_USER_REQUEST, param);
  },
};