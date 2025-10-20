// src/hooks/useAuth.js

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Check for existing user session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Error parsing stored user:', err);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  /**
   * Login function - calls Django backend
   */
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      // Call Django login API
      const data = await authAPI.login(email, password);

      // Store user data
      const userData = {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        playerId: data.playerId
      };

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));

      // Navigate to player report page with their playerId
      navigate(`/player/${data.playerId}`);
      
      return { success: true };
    } catch (err) {
      const errorMessage = err.message || 'Invalid credentials';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  /**
   * Logout function
   */
  const logout = () => {
    authAPI.logout();
    setUser(null);
    navigate('/login');
  };

  return {
    user,
    login,
    logout,
    loading,
    error,
    isAuthenticated: !!user
  };
};