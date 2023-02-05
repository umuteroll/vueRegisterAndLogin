import {
  SIGN_USER,
  SET_SIGN_USER,
  SIGN_USER_REQUEST,
  SET_SIGN_USER_REQUEST,
} from './constants';
export default {
  [SET_SIGN_USER]: (state, payload) => {
    state[SIGN_USER] = payload;
  },
  [SET_SIGN_USER_REQUEST]: (state, payload) => {
    state[SIGN_USER_REQUEST] = payload;
  },
};
