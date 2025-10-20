import { useState, useEffect } from 'react';
import { playerAPI } from '../services/api';

export const usePlayerData = (playerId) => {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      if (!playerId) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await playerAPI.getPlayerReport(playerId);
        setPlayerData(data);
      } catch (err) {
        console.error('Error fetching player data:', err);
        setError(err.message || 'Failed to load player data');
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerData();
  }, [playerId]);

  return { playerData, loading, error };
};