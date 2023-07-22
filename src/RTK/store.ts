import { configureStore } from "@reduxjs/toolkit"
import { loginAxios } from "./authRTK/loginSlice";
export const store = configureStore({
  reducer: {
    token : async() => await loginAxios
  },
});