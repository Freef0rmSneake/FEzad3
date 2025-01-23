import { createSlice } from '@reduxjs/toolkit';

// Odczytaj ulubione miasta z localStorage lub ustaw domyślne
const getInitialFavorites = () => {
  const savedFavorites = localStorage.getItem('favoriteCities');
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const initialState = {
  favorites: getInitialFavorites(),
};

const favoriteCitiesSlice = createSlice({
  name: 'favoriteCities',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
        localStorage.setItem('favoriteCities', JSON.stringify(state.favorites)); // Zapisz do localStorage
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((city) => city !== action.payload);
      localStorage.setItem('favoriteCities', JSON.stringify(state.favorites)); // Zapisz do localStorage
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteCitiesSlice.actions;
export default favoriteCitiesSlice.reducer;