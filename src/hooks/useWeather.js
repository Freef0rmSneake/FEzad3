import { useState, useEffect, useCallback } from 'react';
import { getCurrentWeather, getWeatherForecast } from '../services/weatherService';

export const useWeather = (city) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const current = await getCurrentWeather(city);
      const forecastData = await getWeatherForecast(city);
      setCurrentWeather(current);
      setForecast(forecastData);
    } catch (err) {
      setError('Nie udało się pobrać danych pogodowych. Spróbuj ponownie później.');
    } finally {
      setLoading(false);
    }
  }, [city]);

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city, fetchWeather]);

  return { currentWeather, forecast, loading, error };
};