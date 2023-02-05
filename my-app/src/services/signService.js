import { signApiClient } from '../api/signapi/index.js';
export default {
  async getUserInfoByEmail(param) {
    const { data: { data } } = await signApiClient.get(
      `/users?email=${param}`,
    );
    return data;
  },
  async createUser(param) {
    const { data: { data } } = await signApiClient.post(
      '/user', param,
    );
    return data;
  },
};
