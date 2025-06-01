import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("godbless");

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
