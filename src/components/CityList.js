import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { addFavorite, removeFavorite } from '../features/favoriteCitiesSlice';
import { saveToLocalStorage, getFromLocalStorage, isLocalStorageAvailable } from '../utils/localStorageUtils';

const cities = [
  'Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań',
  'Gdańsk', 'Szczecin', 'Bydgoszcz', 'Lublin', 'Białystok',
  'Katowice', 'Gdynia', 'Częstochowa', 'Radom', 'Sosnowiec',
  'Toruń', 'Kielce', 'Gliwice', 'Zabrze', 'Olsztyn'
];

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
    if (isLocalStorageAvailable()) {
      saveToLocalStorage('favoriteCities', favorites);
    }
  };

  return (
    <div className="city-list">
      <h2>Wybierz miasto:</h2>
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="icon" aria-hidden="true" />
        <input
          type="text"
          placeholder="Wyszukaj miejscowość..."
          value={searchTerm}
          onChange={handleSearch}
          aria-label="Wyszukaj miejscowość"
        />
      </div>
      <ul>
        {filteredCities.map((city) => (
          <li key={city}>
            <Link to={`/city/${city}`} aria-label={`Przejdź do pogody w ${city}`}>
              {city}
            </Link>
            <button
              onClick={() => handleToggleFavorite(city)}
              aria-label={favorites.includes(city) ? `Usuń ${city} z ulubionych` : `Dodaj ${city} do ulubionych`}
            >
              <FontAwesomeIcon icon={faHeart} className="icon" aria-hidden="true" />
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
              <Link to={`/city/${city}`} aria-label={`Przejdź do pogody w ${city}`}>
                {city}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CityList;