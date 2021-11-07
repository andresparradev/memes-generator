import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";

function useUser() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (window.localStorage) {
      const userInLocalStorage = localStorage.getItem("user");
      if (userInLocalStorage) setUser(JSON.parse(userInLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (window.localStorage) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const login = (userParam) => {
    setUser(userParam);
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    login,
    logout,
  };
}

export default useUser;
