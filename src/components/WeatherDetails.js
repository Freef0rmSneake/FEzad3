import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherDetails = ({ weather }) => {
  if (!weather) return null;

  return (
    <WeatherCard
      title={weather.name}
      temperature={weather.main.temp}
      weather={weather.weather[0].icon}
      wind={weather.wind}
      humidity={weather.main.humidity}
    />
  );
};

export default WeatherDetails;