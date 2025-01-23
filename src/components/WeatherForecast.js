import React, { useMemo } from 'react';
import WeatherCard from './WeatherCard';

const WeatherForecast = ({ forecast }) => {
  const forecastData = useMemo(() => {
    if (!forecast) return [];
    return forecast.list.slice(0, 5).map((item) => ({
      date: item.dt_txt,
      temperature: item.main.temp,
      weather: item.weather[0].icon,
      wind: item.wind,
      humidity: item.main.humidity,
    }));
  }, [forecast]);

  if (!forecast) return null;

  return (
    <div>
      <h3>Prognoza na 5 dni:</h3>
      {forecastData.map((item) => (
        <WeatherCard
          key={item.date}
          title={item.date}
          temperature={item.temperature}
          weather={item.weather}
          wind={item.wind}
          humidity={item.humidity}
        />
      ))}
    </div>
  );
};

export default WeatherForecast;