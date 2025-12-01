import React, { 
    createContext, 
    useContext, 
    useState, 
    useMemo, 
    useCallback 
} from 'react';
import  client  from '../services/api-client'; 
import {AuthService} from "../services/auth.service"

import { User, AuthTokens, LoginCredentials } from '../types/auth.types';
import { User } from '../types/user.types';

// State and Functions exposed by the Context
interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<User>;
  logout: () => void;
  register: (data: LoginCredentials) => Promise<User>;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the API endpoints for authentication
const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  ME: '/auth/me', // For fetching initial user data
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Use localStorage/sessionStorage for persistence if needed, 
  // but for simplicity, we start with null
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);


  const login = useCallback(async (credentials: LoginCredentials): Promise<User> => {
    const { user: userData, token: authToken } = await AuthService.login(credentials);

    setToken(authToken);
    setUser(userData);

    return userData;
  }, []);

  const register = useCallback(async (data: LoginCredentials): Promise<User> => {
    const { user: userData, token: authToken } = await AuthService.register(data);

    setToken(authToken);
    setUser(userData);

    return userData;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    console.log('User logged out. State cleared.');
  }, []);
  
  const value = useMemo(() => ({
    user,
    token,
    isAuthenticated: !!token && !!user, // Derived state
    login,
    logout,
    register,
  }), [user, token, login, logout, register]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
