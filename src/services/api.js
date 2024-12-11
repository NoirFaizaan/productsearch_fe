import axios from "axios";

// If the environment variable is missing or undefined, set a fallback URL
const apiBaseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api/products';

// Log the base URL being used
console.info(`API Base URL: ${apiBaseURL}`);

// Create Axios instance
const api = axios.create({
  baseURL: apiBaseURL, // Using either the environment variable or the fallback URL
  timeout: 20000, // Request timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (e.g., for attaching auth tokens)
api.interceptors.request.use(
  (config) => {
    try {
      // Example: Add token to headers if needed
      // const token = localStorage.getItem("authToken");
      // if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    } catch (error) {
      console.error("Request Interceptor Error:", error.message);
      return Promise.reject(error);
    }
  },
  (error) => {
    console.error("Request Error:", error.message);
    return Promise.reject(error);
  }
);

// Response interceptor (e.g., global error handling)
api.interceptors.response.use(
  (response) => response, // Return the response if successful
  (error) => {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("API Response Error:", {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
    } else if (error.request) {
      // No response received from the server
      console.error("No Response Error:", error.request);
    } else {
      // Error setting up the request
      console.error("Request Setup Error:", error.message);
    }

    // Log additional details for debugging
    console.error("Error Config:", error.config);

    // Return a custom error object
    return Promise.reject({
      message: error.message || "An unknown error occurred.",
      ...(error.response ? { status: error.response.status, data: error.response.data } : {}),
    });
  }
);

export default api;
