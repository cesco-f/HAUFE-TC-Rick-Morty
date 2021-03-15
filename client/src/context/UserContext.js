import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

function userReducer(prevUser, newUser) {
  return {
    ...prevUser,
    ...newUser,
    favList: new Set(newUser.favList),
  };
}

export const UserProvider = (props) => {
  const [user, setUser] = useReducer(userReducer, null);

  return <UserContext.Provider value={[user, setUser]} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('The useUser hook must be called inside UserProvider');
  }
  return context;
};
