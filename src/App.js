import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CityList from './components/CityList';
import WeatherDetails from './components/WeatherDetails';
import TemperatureUnitSelector from './components/TemperatureUnitSelector';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Pogoda w Polsce</h1>
        <nav>
          <Link to="/">Strona główna</Link>
        </nav>
        <TemperatureUnitSelector />
        <Routes>
          <Route path="/" element={<CityList />} />
          <Route path="/city/:cityName" element={<WeatherDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;