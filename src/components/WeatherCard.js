import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faWind, faTint, faCloud } from '@fortawesome/free-solid-svg-icons';
import WeatherIcon from './WeatherIcon';

// Funkcja do konwersji temperatury na wybraną jednostkę
const convertTemperature = (temp, unit) => {
  if (unit === 'Celsius') return `${temp}°C`;
  if (unit === 'Fahrenheit') return `${((temp * 9) / 5 + 32).toFixed(2)}°F`;
  if (unit === 'Kelvin') return `${(temp + 273.15).toFixed(2)}K`;
  return `${temp}°C`;
};

const WeatherCard = ({ title, temperature, weather, wind, humidity, clouds }) => {
  const unit = useSelector((state) => state.temperatureUnit.unit); // Pobierz jednostkę temperatury z Redux
  const convertedTemp = convertTemperature(temperature, unit); // Przelicz temperaturę

  return (
    <div className="weather-card">
      <h3>{title}</h3>
      {/* Temperatura */}
      <p>
        <FontAwesomeIcon icon={faThermometerHalf} className="icon" aria-hidden="true" />
        Temperatura: {convertedTemp}
      </p>
      {/* Warunki pogodowe */}
      <p>
        <FontAwesomeIcon icon={faCloud} className="icon" aria-hidden="true" />
        Warunki: <WeatherIcon code={weather} />
      </p>
      {/* Wiatr */}
      <p>
        <FontAwesomeIcon icon={faWind} className="icon" aria-hidden="true" />
        Wiatr: {wind.speed} m/s, kierunek: {wind.deg}°
      </p>
      {/* Wilgotność */}
      <p>
        <FontAwesomeIcon icon={faTint} className="icon" aria-hidden="true" />
        Wilgotność: {humidity}%
      </p>
      {/* Zachmurzenie */}
      <p>
        <FontAwesomeIcon icon={faCloud} className="icon" aria-hidden="true" />
        Zachmurzenie: {clouds}%
      </p>
    </div>
  );
};

export default WeatherCard;