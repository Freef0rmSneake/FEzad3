import { useState, useEffect, useCallback } from 'react';
import { getCurrentWeather, getWeatherForecast } from '../services/weatherService';

// Hook do pobierania danych pogodowych
export const useWeather = (city) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Funkcja do pobierania danych pogodowych
  const fetchWeather = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const current = await getCurrentWeather(city); // Pobierz bieżącą pogodę
      const forecastData = await getWeatherForecast(city); // Pobierz prognozę
      setCurrentWeather(current);
      setForecast(forecastData);
    } catch (err) {
      setError('Nie udało się pobrać danych pogodowych. Spróbuj ponownie później.');
    } finally {
      setLoading(false);
    }
  }, [city]);

  // Wywołaj fetchWeather, gdy zmieni się miasto
  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city, fetchWeather]);

  return { currentWeather, forecast, loading, error };
};