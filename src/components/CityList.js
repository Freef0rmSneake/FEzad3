import React from 'react';
import { Link } from 'react-router-dom';

const cities = ['Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań'];

const CityList = () => {
  return (
    <div>
      <h2>Wybierz miasto:</h2>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <Link to={`/city/${city}`}>{city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;