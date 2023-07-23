import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { loginSlice } from './authRTK/loginSlice';

export const store = configureStore({
  reducer: {
    auth: loginSlice.reducer,
    // 다른 slice들도 필요하다면 여기에 추가
  },
  middleware: [thunkMiddleware], // 직접 미들웨어를 지정
});

export default store;
