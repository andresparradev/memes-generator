import { useContext, useEffect } from "react";
import { DarkModeContext } from "../context/darkModeContext";

function useDarkMode() {
  const { mode, setMode } = useContext(DarkModeContext);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return {
    mode,
    toggleMode,
  };
}

export default useDarkMode;
