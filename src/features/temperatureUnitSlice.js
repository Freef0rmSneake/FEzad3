import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  unit: 'Celsius', // Możliwe wartości: 'Celsius', 'Fahrenheit', 'Kelvin'
};

const temperatureUnitSlice = createSlice({
  name: 'temperatureUnit',
  initialState,
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});

export const { setUnit } = temperatureUnitSlice.actions;
export default temperatureUnitSlice.reducer;