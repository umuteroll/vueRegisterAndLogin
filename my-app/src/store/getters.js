import { SIGN_USER, GET_SIGN_USER, SIGN_USER_REQUEST, GET_SIGN_USER_REQUEST } from './constants';
export default {
  [GET_SIGN_USER]: (state) => state[SIGN_USER],
  [GET_SIGN_USER_REQUEST]: (state) => state[SIGN_USER_REQUEST],
};