import React from 'react';
import { useParams } from 'react-router-dom';
import { useWeather } from '../hooks/useWeather';
import WeatherCard from './WeatherCard';

const WeatherDetails = () => {
  const { cityName } = useParams();
  const { currentWeather, loading, error } = useWeather(cityName);

  if (loading) return <p>Ładowanie...</p>;
  if (error) return <p>{error}</p>;
  if (!currentWeather) return null;

  return (
    <WeatherCard
      title={currentWeather.name}
      temperature={currentWeather.main.temp}
      weather={currentWeather.weather[0].icon}
      wind={currentWeather.wind}
      humidity={currentWeather.main.humidity}
    />
  );
};

export default WeatherDetails;