import { baseUrl, sendRequest } from './servicesCommon';

export const getCharactersReq = (token) => {
  const options = {
    method: 'GET',
    headers: { 'x-access-token': token },
  };
  return sendRequest(baseUrl + '/characters', options);
};
