import apiRequest from './index';

const RESOURCE = '/api/stay/book';

export const getDateList = async id => {
  try {
    const response = await apiRequest.get(`${RESOURCE}/${id}`);
    return response;
  } catch (error) {
    throw new Error('API getDateList error');
  }
};

export const postStaydata = async (id, sum, startDate, endDate) => {
  try {
    const response = await apiRequest.post(`${RESOURCE}/${id}`, {
      checkinDate: startDate,
      checkoutDate: endDate,
      groupSize: sum,
    });
    return response;
  } catch (error) {
    alert(error.response.data.msg);
  }
};
