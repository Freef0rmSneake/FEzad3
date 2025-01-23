import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { addFavorite, removeFavorite } from '../features/favoriteCitiesSlice';
import { saveToLocalStorage, getFromLocalStorage, isLocalStorageAvailable } from '../utils/localStorageUtils';

// Lista miast - można by ją pobierać z API, ale na razie jest na sztywno
const cities = [
  'Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań',
  'Gdańsk', 'Szczecin', 'Bydgoszcz', 'Lublin', 'Białystok',
  'Katowice', 'Gdynia', 'Częstochowa', 'Radom', 'Sosnowiec',
  'Toruń', 'Kielce', 'Gliwice', 'Zabrze', 'Olsztyn'
];

const CityList = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Stan dla wyszukiwania
  const dispatch = useDispatch(); // Hook do wysyłania akcji Redux
  const favorites = useSelector((state) => state.favoriteCities.favorites); // Pobierz ulubione miasta z Redux

  // Funkcja do filtrowania miast na podstawie wyszukiwania
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtruj miasta, które pasują do wpisanego tekstu
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Dodaj lub usuń miasto z ulubionych
  const handleToggleFavorite = (city) => {
    if (favorites.includes(city)) {
      dispatch(removeFavorite(city)); // Usuń z ulubionych
    } else {
      dispatch(addFavorite(city)); // Dodaj do ulubionych
    }
    // Zapisz ulubione miasta w localStorage (jeśli jest dostępne)
    if (isLocalStorageAvailable()) {
      saveToLocalStorage('favoriteCities', favorites);
    }
  };

  return (
    <div className="city-list">
      <h2>Wybierz miasto:</h2>
      {/* Pole wyszukiwania */}
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
      {/* Lista miast */}
      <ul>
        {filteredCities.map((city) => (
          <li key={city}>
            <Link to={`/city/${city}`} aria-label={`Przejdź do pogody w ${city}`}>
              {city}
            </Link>
            {/* Przycisk do dodawania/usuwania z ulubionych */}
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
      {/* Lista ulubionych miast */}
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