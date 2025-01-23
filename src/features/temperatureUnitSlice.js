import { createSlice } from '@reduxjs/toolkit';

// Odczytaj jednostkę temperatury z localStorage lub ustaw domyślną
const getInitialUnit = () => {
  const savedUnit = localStorage.getItem('temperatureUnit');
  return savedUnit || 'Celsius';
};

const initialState = {
  unit: getInitialUnit(),
};

const temperatureUnitSlice = createSlice({
  name: 'temperatureUnit',
  initialState,
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
      localStorage.setItem('temperatureUnit', action.payload); // Zapisz do localStorage
    },
  },
});

export const { setUnit } = temperatureUnitSlice.actions;
export default temperatureUnitSlice.reducer;