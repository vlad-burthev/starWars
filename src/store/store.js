import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { setLocalStorage } from "@/utils/localStorage";

import toFavoriteSlice from "./toFavorite/toFavoriteSlice";
import themesSlice from "./themes/themesSlice";

const reducers = combineReducers({
  toFavorite: toFavoriteSlice,
  themes: themesSlice,
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});

store.subscribe(() => {
  setLocalStorage("store", store.getState().toFavorite.favorite);
});
