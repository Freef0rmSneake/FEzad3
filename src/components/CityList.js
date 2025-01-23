import React, { useCallback } from 'react';

const cities = ['Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań'];

const CityList = ({ onSelectCity }) => {
  const handleClick = useCallback((city) => {
    onSelectCity(city);
  }, [onSelectCity]);

  return (
    <div>
      <h2>Wybierz miasto:</h2>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <button onClick={() => handleClick(city)}>{city}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;