const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Fetches products from the backend API with pagination, category, and search query parameters.
 */
export const fetchProducts = async (params = {}) => {
  try {
    const { page = 1, limit = 6, category = '', search = '' } = params;

    // Construct URL with query parameters
    const url = new URL(`${API_BASE_URL}/products`);
    url.searchParams.append('page', page);
    url.searchParams.append('limit', limit);
    if (category) url.searchParams.append('category', category);
    if (search) url.searchParams.append('search', search);

    const response = await fetch(url.toString());
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
