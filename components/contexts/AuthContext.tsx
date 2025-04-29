import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import {clearData, getToken, getUser, setToken, setUser} from '@/components/utils/localStorage';

interface AuthContextProps {
  user: any;
  token: string | null;
  login: (userData: any) => Promise<void>;
  setUserData: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({children}: { children: ReactNode }) => {
  const [user, setUserState] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setTokenState] = useState<string | null>(null);

  const setUserData = async (userData: any) => {
    userData.id = userData._id;
    delete userData._id;
    setUserState(userData);
    await setUser(userData);
  }
  const login = async (userData: any) => {
    const token = userData.accessToken;
    delete userData.accessToken;
    delete userData.role;
    setUserState(userData);
    setTokenState(token);
    await setUser(userData);
    await setToken(token);
  };

  const logout = async () => {
    await clearData()
  };

  useEffect(() => {
    const loadUserData = async () => {
      const storedUser = await getUser();
      const storedToken = await getToken();
      if (storedUser && storedToken) {
        setUserState(storedUser);
        setTokenState(storedToken);
      }
    };
    loadUserData();
  }, []);


  return (
    <AuthContext.Provider value={{user, token, login, setUserData, logout, loading, setLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

// Define the useAuth hook
export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }

  return authContext;
};
