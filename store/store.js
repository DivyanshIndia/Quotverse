import { configureStore } from "@reduxjs/toolkit";
import LikedSlice from "./LikedSlice";
import QuotesSlice from "./quotesSlice";
import UserSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    liked: LikedSlice,
    quotes: QuotesSlice,
    user: UserSlice,
  },
});
