import { createSlice } from "@reduxjs/toolkit";

export const LikedSlice = createSlice({
  name: "liked",
  initialState: {
    liked: [],
  },
  reducers: {
    addLiked: (state, action) => {
      const existingItem = state.liked.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.liked.push(action.payload);
      }
    },
    removeLiked: (state, action) => {
      state.liked = state.liked.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addLiked, removeLiked } = LikedSlice.actions;

export default LikedSlice.reducer;
