import React from 'react';
import WeatherIcon from './WeatherIcon';

const WeatherCard = ({ title, temperature, weather, wind, humidity }) => {
  return (
    <div className="weather-card">
      <h3>{title}</h3>
      <p>Temperatura: {temperature}°C</p>
      <p>Warunki: <WeatherIcon code={weather} /></p>
      <p>Wiatr: {wind.speed} m/s, kierunek: {wind.deg}°</p>
      <p>Wilgotność: {humidity}%</p>
    </div>
  );
};

export default WeatherCard;