import { baseUrl, sendRequest } from './servicesCommon';

export const getCharacters = (token) => {
  const options = {
    method: 'GET',
    headers: { 'x-access-token': token },
  };
  return sendRequest(baseUrl + '/characters', options);
};

export const addCharacter = (token, charId) => {
  const options = {
    method: 'PUT',
    headers: { 'x-access-token': token },
  };
  return sendRequest(`${baseUrl}/add-character/${charId}`, options);
};

export const removeCharacter = (token, charId) => {
  const options = {
    method: 'PUT',
    headers: { 'x-access-token': token },
  };
  return sendRequest(`${baseUrl}/remove-character/${charId}`, options);
};
