import React from 'react';
import { useParams } from 'react-router-dom';
import { useWeather } from '../hooks/useWeather';
import WeatherCard from './WeatherCard';

const WeatherDetails = () => {
  const { cityName } = useParams(); // Pobierz nazwę miasta z URL
  const { currentWeather, loading, error } = useWeather(cityName); // Pobierz dane pogodowe

  // Ładowanie...
  if (loading) return <p>Ładowanie...</p>;
  // Błąd...
  if (error) return <p>{error}</p>;
  // Brak danych...
  if (!currentWeather) return null;

  // Wyświetl kartę pogodową
  return (
    <WeatherCard
      title={currentWeather.name}
      temperature={currentWeather.main.temp}
      weather={currentWeather.weather[0].icon}
      wind={currentWeather.wind}
      humidity={currentWeather.main.humidity}
      clouds={currentWeather.clouds.all}
    />
  );
};

export default WeatherDetails;