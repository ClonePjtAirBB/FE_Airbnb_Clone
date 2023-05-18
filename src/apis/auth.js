import apiRequest from './index';

const RESOURCE = '/api/user';

export const auth = async (signinData, path) => {
  try {
    const response = await apiRequest.post(`${RESOURCE}${path}`, signinData);
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};
