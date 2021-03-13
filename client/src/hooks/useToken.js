import { useState } from 'react';

export default function useToken() {
  const [tokenState, setTokenState] = useState({
    token: null,
    setToken: (token) => setTokenState({ ...tokenState, token: token }),
  });

  return tokenState;
}
