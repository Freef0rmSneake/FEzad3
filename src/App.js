import React, { useReducer } from 'react';
import CityList from './components/CityList';
import WeatherDetails from './components/WeatherDetails';
import WeatherForecast from './components/WeatherForecast';
import { useWeather } from './hooks/useWeather';
import './styles/App.css';

const initialState = {
  selectedCity: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_CITY':
      return { ...state, selectedCity: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedCity } = state;
  const { currentWeather, forecast, loading, error } = useWeather(selectedCity);

  const handleSelectCity = (city) => {
    dispatch({ type: 'SELECT_CITY', payload: city });
  };

  return (
    <div className="App">
      <h1>Pogoda w Polsce</h1>
      <CityList onSelectCity={handleSelectCity} />
      {loading && <p>Ładowanie...</p>}
      {error && <p>{error}</p>}
      {currentWeather && <WeatherDetails weather={currentWeather} />}
      {forecast && <WeatherForecast forecast={forecast} />}
    </div>
  );
}

export default App;