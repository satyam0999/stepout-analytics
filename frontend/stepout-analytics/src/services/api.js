const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Helper function to get auth headers
 */
const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

/**
 * Helper function to handle API errors
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ 
      error: 'An error occurred' 
    }));
    throw new Error(error.error || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

/**
 * Authentication API
 */
export const authAPI = {
  /**
   * Login user
   * @param {string} email 
   * @param {string} password 
   * @returns {Promise<Object>} User data with token and playerId
   */
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await handleResponse(response);
      
      if (data.token) {
        localStorage.setItem('authToken', data.token);
      }
      
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  /**
   * Logout user
   */
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }
};

/**
 * Player Data API
 */
export const playerAPI = {
  /**
   * Get complete player report
   * @param {number} playerId 
   * @returns {Promise<Object>} Complete player data
   */
  getPlayerReport: async (playerId) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/players/${playerId}/report/`,
        {
          method: 'GET',
          headers: getAuthHeaders(),
        }
      );

      return await handleResponse(response);
    } catch (error) {
      console.error('Player report error:', error);
      throw error;
    }
  }
};

export { API_BASE_URL };