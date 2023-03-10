import signApiClient from '../api/signapi/index.js';
export default {
  async getUserInfoByEmail(param) {
    const data = await signApiClient.get(
      `/users?email=${param}`,
    );
    const filteredData = data.data.filter(user => user.email === param);
    return filteredData;
  },
  async createUser(param) {
    const user = await this.getUserInfoByEmail(param.email);
    if (user.length) {
      return false;
    }
    const data = await signApiClient.post(
      '/users', param,
    );
    return data.data;
  },
};
