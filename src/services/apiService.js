import axios from 'axios';

const API_BASE_URL = 'https://your-api-endpoint.com'; // Replace with your actual API endpoint

const apiService = {
  getProducts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  updateProduct: async (productId, updatedData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/products/${productId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error(`Error updating product with ID ${productId}:`, error);
      throw error;
    }
  },

  deleteProduct: async (productId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },
};

export default apiService;
