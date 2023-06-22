import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

export const themesSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { changeTheme } = themesSlice.actions;
export default themesSlice.reducer;
