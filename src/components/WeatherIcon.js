import React from 'react';

const WeatherIcon = ({ code }) => {
  return (
    <img
      src={`http://openweathermap.org/img/wn/${code}@2x.png`}
      alt="Weather icon"
    />
  );
};

export default WeatherIcon;