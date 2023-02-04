import {
  SET_SIGN_USER,
  FETCH_SIGN_USER,
} from './sign.constants';
import signService from '~/services/sign.service';
export default {
  async [SET_SIGN_USER]({ commit }, param) {
    const sellerNoticeDetail = await signService.getUserInfoByEmail(param);
    commit(FETCH_SIGN_USER, sellerNoticeDetail);
  },
};