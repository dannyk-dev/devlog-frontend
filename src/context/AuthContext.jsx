/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { registerUser } from "../api/auth";
import { useUser } from "../hooks/services/user";
import { hasToken } from "../api";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // const [userExists, setUserExists] = useState(false);
  const { user, isLoading, isError } = useUser();

  // useEffect(() => {
  //   if (hasToken()) setUserExists(true);
  //   else setUserExists(false);
  // }, [setUserExists]);

  async function register(data) {
    const registeredUser = await registerUser(data);

    if (registeredUser?.user) {
      const { token } = registeredUser;

      localStorage.setItem("auth_token", JSON.stringify(token));
      return true;
    }

    return false;
  }

  return (
    <AuthContext.Provider value={{ register, user, isLoading, isError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
