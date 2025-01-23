import { configureStore } from '@reduxjs/toolkit';
import temperatureUnitReducer from '../features/temperatureUnitSlice';

export const store = configureStore({
  reducer: {
    temperatureUnit: temperatureUnitReducer,
  },
});