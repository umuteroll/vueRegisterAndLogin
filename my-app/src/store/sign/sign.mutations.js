import {
  SIGN_USER,
  SET_SIGN_USER,
} from './sign.constants';
export default {
  [SET_SIGN_USER]: (state, payload) => {
    state[SIGN_USER] = payload;
  },
};
