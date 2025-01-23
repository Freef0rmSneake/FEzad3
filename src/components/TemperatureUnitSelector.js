import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUnit } from '../features/temperatureUnitSlice';

const TemperatureUnitSelector = () => {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.temperatureUnit.unit);

  const handleChange = (e) => {
    dispatch(setUnit(e.target.value));
  };

  return (
    <div>
      <label>Jednostka temperatury: </label>
      <select value={unit} onChange={handleChange}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
    </div>
  );
};

export default TemperatureUnitSelector;