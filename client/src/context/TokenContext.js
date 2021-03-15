import { createContext, useContext, useReducer } from 'react';

const TokenContext = createContext();

const tokenReducer = (_, newToken) => {
  return newToken;
};

export const TokenProvider = (props) => {
  const [token, setToken] = useReducer(tokenReducer);

  return <TokenContext.Provider value={[token, setToken]} {...props} />;
};

export const useToken = () => {
  const context = useContext(TokenContext);

  if (context === undefined) {
    throw new Error('The useToken hook must be called inside TokenProvider');
  }

  return context;
};
