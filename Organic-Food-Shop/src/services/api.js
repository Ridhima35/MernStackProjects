const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Fetches all products from the backend API.
 * Falls back to null if the server is offline or request fails.
 */
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('API connection failed. Returning fallback data.', error);
    return null;
  }
};

/**
 * Fetches trending products from the backend API.
 */
export const fetchTrendingProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/trending`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('API connection failed. Returning fallback data.', error);
    return null;
  }
};
