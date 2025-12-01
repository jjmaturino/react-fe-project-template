// import { auth } from './auth-service'; // specific to your project
const API_URL = process.env.REACT_APP_API_URL || '';

// We extend standard RequestInit but 'data' replaces 'body' for convenience
interface ClientConfig extends Omit<RequestInit, 'body'> {
  data?: unknown;
  token?: string;
  headers?: HeadersInit; // Standard TS type for headers
}


/**
 * Safely parses a fetch response.
 * Handles empty bodies (204) and malformed JSON (e.g. 500 HTML errors).
 */
export async function safeResponseData<T = unknown>(response: Response): Promise<T> {
  const text = await response.text();
  
  try {
    return text ? JSON.parse(text) : {} as T;
  } catch (error) {
    // If parsing fails (e.g. receiving HTML text "Internal Server Error"), 
    // return the raw text so the caller can see what went wrong.
    console.warn('API returned non-JSON response:', text);

    return text as unknown as T;
  }
}


export default async function client<T = unknown>(
  endpoint: string,
  { data, token, headers: customHeaders, ...customConfig }: ClientConfig = {}
): Promise<T> {
  
  const headers: HeadersInit = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(data ? { 'Content-Type': 'application/json' } : {}),
    ...customHeaders, // Allows overriding the defaults
  };

  const config: RequestInit = {
    method: data ? 'POST' : 'GET', // Default logic
    body: data ? JSON.stringify(data) : undefined,
    headers,
    ...customConfig, // Allows overriding method (e.g. to PUT or DELETE)
  };

  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  const response = await window.fetch(`${API_URL}${cleanEndpoint}`, config);

  // 5. Global Error Handling (Interceptors)
  if (response.status === 401 || response.status === 403) {
    await auth.logout();
    return Promise.reject(new Error('Please re-authenticate'));
  }

  const responseData = await safeResponseData<T>(response)

  if (response.ok) {
    return responseData 
  }

  return Promise.reject(responseData);
}
