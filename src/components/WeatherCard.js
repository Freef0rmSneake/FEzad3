import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faWind, faTint, faCloud } from '@fortawesome/free-solid-svg-icons';
import WeatherIcon from './WeatherIcon';

const convertTemperature = (temp, unit) => {
  if (unit === 'Celsius') return `${temp}°C`;
  if (unit === 'Fahrenheit') return `${((temp * 9) / 5 + 32).toFixed(2)}°F`;
  if (unit === 'Kelvin') return `${(temp + 273.15).toFixed(2)}K`;
  return `${temp}°C`;
};

const WeatherCard = ({ title, temperature, weather, wind, humidity, clouds }) => {
  const unit = useSelector((state) => state.temperatureUnit.unit);
  const convertedTemp = convertTemperature(temperature, unit);

  return (
    <div className="weather-card">
      <h3>{title}</h3>
      <p>
        <FontAwesomeIcon icon={faThermometerHalf} className="icon" />
        Temperatura: {convertedTemp}
      </p>
      <p>
        <FontAwesomeIcon icon={faCloud} className="icon" />
        Warunki: <WeatherIcon code={weather} />
      </p>
      <p>
        <FontAwesomeIcon icon={faWind} className="icon" />
        Wiatr: {wind.speed} m/s, kierunek: {wind.deg}°
      </p>
      <p>
        <FontAwesomeIcon icon={faTint} className="icon" />
        Wilgotność: {humidity}%
      </p>
      <p>
        <FontAwesomeIcon icon={faCloud} className="icon" />
        Zachmurzenie: {clouds}%
      </p>
    </div>
  );
};

export default WeatherCard;