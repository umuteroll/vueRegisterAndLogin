import signApiClient from '../api/signapi/index.js';
export default {
  async getUserInfoByEmail(param) {
    const data = await signApiClient.get(
      `/users?email=${param}`,
    );
    return data.data;
  },
  async createUser(param) {
    const data = await signApiClient.post(
      '/users', param,
    );
    return data.data;
  },
};
