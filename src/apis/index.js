import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const baseInstance = axios.create({
  baseURL,
});

baseInstance.interceptors.response.use(
  ({ data }) => data,
  error => {
    console.log(`baseInstance.interceptors.response error: ${error}`);
    return Promise.reject(error);
  }
);

const apiRequest = {
  get: url => baseInstance.get(url),
  post: (url, data, config) => baseInstance.post(url, data, config),
};

export default apiRequest;
