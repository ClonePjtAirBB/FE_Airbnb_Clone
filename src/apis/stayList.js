import apiRequest from './index';

const RESOURCE = '/api/stay';

export const getAllList = async () => {
  try {
    const response = await apiRequest.get(`${RESOURCE}`);
    return response;
  } catch (error) {
    throw new Error('API getAllList error');
  }
};

export const getFilteredList = async queryString => {
  try {
    const response = await apiRequest.get(`${RESOURCE}/search?${queryString}`);
    return response;
  } catch (error) {
    throw new Error('API getFilteredist error');
  }
};
//추가
export const getDetailList = async id => {
  try {
    const response = await apiRequest.get(`${RESOURCE}/${id}`);
    return response;
  } catch (error) {
    throw new Error('API getDetailList error');
  }
};
