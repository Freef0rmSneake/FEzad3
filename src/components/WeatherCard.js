import React from 'react';
import { useSelector } from 'react-redux';
import WeatherIcon from './WeatherIcon';

const convertTemperature = (temp, unit) => {
  if (unit === 'Celsius') return `${temp}°C`;
  if (unit === 'Fahrenheit') return `${((temp * 9) / 5 + 32).toFixed(2)}°F`;
  if (unit === 'Kelvin') return `${(temp + 273.15).toFixed(2)}K`;
  return `${temp}°C`;
};

const WeatherCard = ({ title, temperature, weather, wind, humidity }) => {
  const unit = useSelector((state) => state.temperatureUnit.unit);
  const convertedTemp = convertTemperature(temperature, unit);

  return (
    <div className="weather-card">
      <h3>{title}</h3>
      <p>Temperatura: {convertedTemp}</p>
      <p>Warunki: <WeatherIcon code={weather} /></p>
      <p>Wiatr: {wind.speed} m/s, kierunek: {wind.deg}°</p>
      <p>Wilgotność: {humidity}%</p>
    </div>
  );
};

export default WeatherCard;