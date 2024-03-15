import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "Divyansh Bhatt",
      id: "db01",
      description: "Give me the FullStack Developer Job",
    },
    reducers: {
      editUser: (state, action) => {
        state.user = action.palyload;
      },
    },
  },
});

export const { editUser } = UserSlice.actions;

export default UserSlice.reducer;
