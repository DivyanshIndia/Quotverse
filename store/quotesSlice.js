import { createSlice } from "@reduxjs/toolkit";

export const QuotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [],
  },
  reducers: {
    addQuotes: (state, action) => {
      state.quotes = action.payload;
    },
  },
});

export const {addQuotes} = QuotesSlice.actions;

export default QuotesSlice.reducer;
