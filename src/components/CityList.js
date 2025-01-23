import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { addFavorite, removeFavorite } from '../features/favoriteCitiesSlice';

const cities = ['Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań'];

const CityList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteCities.favorites);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleFavorite = (city) => {
    if (favorites.includes(city)) {
      dispatch(removeFavorite(city));
    } else {
      dispatch(addFavorite(city));
    }
  };

  return (
    <div className="city-list">
      <h2>Wybierz miasto:</h2>
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <input
          type="text"
          placeholder="Wyszukaj miejscowość..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <ul>
        {filteredCities.map((city) => (
          <li key={city}>
            <Link to={`/city/${city}`}>{city}</Link>
            <button onClick={() => handleToggleFavorite(city)}>
              <FontAwesomeIcon icon={faHeart} className="icon" />
              {favorites.includes(city) ? ' Usuń z ulubionych' : ' Dodaj do ulubionych'}
            </button>
          </li>
        ))}
      </ul>
      <div className="favorites-list">
        <h3>Ulubione miejscowości:</h3>
        <ul>
          {favorites.map((city) => (
            <li key={city}>
              <Link to={`/city/${city}`}>{city}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CityList;