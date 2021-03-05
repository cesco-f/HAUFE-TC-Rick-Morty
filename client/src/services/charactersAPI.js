import { baseUrl, sendRequest } from './servicesCommon';

export const getCharactersReq = (token) => {
  const options = {
    method: 'GET',
    headers: { 'x-access-token': token },
  };
  return sendRequest(baseUrl + '/characters', options);
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
