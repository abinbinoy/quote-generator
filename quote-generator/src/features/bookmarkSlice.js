import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    add: (state, actions) => {
      state.value.push(actions.payload);
    },
  },
});

export const { add } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
