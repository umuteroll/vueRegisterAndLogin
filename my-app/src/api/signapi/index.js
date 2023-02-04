import config from '../config/index.js';
import axios from 'axios';
const signApiClient = axios.create({
  baseURL: config.SIGNUP_URL,
  timeout: config.API_TIMEOUT_MS,
  timeoutErrorMessage: 'İstek zaman aşımına uğradı, lütfen tekrar deneyiniz.',
});
export default signApiClient;
