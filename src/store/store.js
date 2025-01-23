import { configureStore } from '@reduxjs/toolkit';
import temperatureUnitReducer from '../features/temperatureUnitSlice';
import favoriteCitiesReducer from '../features/favoriteCitiesSlice';

export const store = configureStore({
  reducer: {
    temperatureUnit: temperatureUnitReducer,
    favoriteCities: favoriteCitiesReducer,
  },
});