import { useState, useMemo, createContext } from "react";

export const UserContext = createContext();

export default function DarkModeProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
