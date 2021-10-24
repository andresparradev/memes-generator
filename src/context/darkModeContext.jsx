import { useState, useMemo, createContext } from "react";

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  const value = useMemo(() => {
    return {
      mode,
      setMode,
    };
  }, [mode]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}
