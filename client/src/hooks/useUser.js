import { useState } from 'react';

export default function useUser() {
  const [userState, setUserState] = useState({
    user: null,
    setUser: (user) =>
      setUserState({
        ...userState,
        user: { ...user, favList: new Set(user.favList) },
      }),
  });

  return userState;
}
