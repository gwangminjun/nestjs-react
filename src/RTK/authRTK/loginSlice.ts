import { createSlice } from "@reduxjs/toolkit";
import { loginAxios } from "./loginAsyncThunk";

interface AuthState {
    loading: boolean;
    loggedIn: boolean;
    error: string | null;
  }

const initialState : AuthState = {
    loading: false,
    loggedIn: false,
    error: null,
};

export const loginSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {}, // 단순한 동기적인 액션에 대한 리듀서를 정의
    extraReducers : builder => { // 비동기적인 액션에 대한 리듀서를 정의
        builder
            .addCase(loginAxios.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAxios.fulfilled, (state, action) => {
                state.loading = false;
                state.loggedIn = action.payload;
                state.error = null;
            })
            .addCase(loginAxios.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || '로그인 실패하였습니다';
            });
    }
});