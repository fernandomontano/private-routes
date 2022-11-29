import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface UserStatus {
  value: {
    name: string;
    isOnline: boolean;
    email: string;
  };
}

const initialState: UserStatus = {
  value: {
    name: "",
    isOnline: false,
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.value.isOnline = false;
    },
    login: (state) => {
      state.value.isOnline = true;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.value.email = action.payload;
    },
  },
});

export const { logout, login, changeName } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;
