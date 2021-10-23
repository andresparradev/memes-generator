import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

function useDarkMode() {
  const { mode, setMode } = useContext(DarkModeContext);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return {
    mode,
    toggleMode,
  };
}

export default useDarkMode;
