import  client  from './api-client'; 
import {AuthTokens, LoginCredentials } from './types/auth.types'; 
import { User } from './types/user.types'; 

const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  ME: '/auth/me', 
};

/**
 * Service object for all authentication-related API interactions.
 */
export const AuthService = {
  async login(credentials: LoginCredentials): Promise<{ user: User, token: string }> {
    const authData = await client<AuthTokens>(AUTH_ENDPOINTS.LOGIN, {
      data: credentials,
      method: 'POST',
    });
    
    // 2. Get user profile using the new token
    const user = await this.fetchUser(authData.token);
    
    return { 
      user, 
      token: authData.token 
    };
  },

  async register(data: LoginCredentials): Promise<{ user: User, token: string }> {
    // 1. Get tokens
    const authData = await client<AuthTokens>(AUTH_ENDPOINTS.REGISTER, {
      data,
      method: 'POST',
    });
    
    // 2. Get user profile using the new token
    const user = await this.fetchUser(authData.token);

    return { 
      user, 
      token: authData.token 
    };
  },
  
  async fetchUser(token: string): Promise<User> {
    const user = await client<User>(AUTH_ENDPOINTS.ME, {
        token: token,
        method: 'GET',
    });
    return user;
  }

};
