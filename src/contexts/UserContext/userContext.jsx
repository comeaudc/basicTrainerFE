import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [currentWO, setCurrentWO] = useState(null);

  let value = {
    user,
    setUser,

    currentWO,
    setCurrentWO,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function userInfo() {
  return useContext(UserContext);
}
