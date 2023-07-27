import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { loginSlice } from "./authRTK/loginSlice";
import { signupSlice } from "./authRTK/signupSlice";

export const store = configureStore({
  reducer: {
    auth: loginSlice.reducer,
    signup: signupSlice.reducer,
  },
  middleware: [thunkMiddleware], // 직접 미들웨어를 지정
});

export default store;
