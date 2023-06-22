import { getLocalStorage } from "@/utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";
import { omit } from "lodash";

const initialState = {
  favorite: getLocalStorage("store"),
};

const toFavoriteSlice = createSlice({
  name: "toFavorite",
  initialState,
  reducers: {
    addPersonToFavorit: (state, { payload }) => {
      state.favorite = {
        ...state.favorite,
        ...payload,
      };
    },
    removePersonFromFavorit: (state, { payload }) => {
      state.favorite = omit(state.favorite, [payload]);
    },
  },
});

export const { addPersonToFavorit, removePersonFromFavorit } =
  toFavoriteSlice.actions;

export default toFavoriteSlice.reducer;
