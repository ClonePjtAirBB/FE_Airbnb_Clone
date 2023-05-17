import apiRequest from './index';

const RESOURCE = '/api/user';

export const signin = async signinData => {
  try {
    const response = await apiRequest.post(`${RESOURCE}/signin`, signinData);
    return response;
  } catch (error) {
    throw new Error('API login error');
  }
};
