import { baseUrl, sendRequest } from './servicesCommon';

export const getUserReq = (token) => {
  const options = {
    method: 'GET',
    headers: { 'x-access-token': token },
  };
  return sendRequest(baseUrl + '/user', options);
};

export const addCharacterReq = (token, charId) => {
  const options = {
    method: 'PUT',
    headers: { 'x-access-token': token },
  };
  return sendRequest(`${baseUrl}/add-character/${charId}`, options);
};

export const removeCharacterReq = (token, charId) => {
  const options = {
    method: 'PUT',
    headers: { 'x-access-token': token },
  };
  return sendRequest(`${baseUrl}/remove-character/${charId}`, options);
};
