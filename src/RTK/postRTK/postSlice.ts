import { createSlice } from "@reduxjs/toolkit";
import { getAllPostAsyncAxios, PostParam } from "./postAsyncThunk";

type PostResult = {
    loading: boolean;
    finish: boolean;
    error: string | null;
    data : PostParam[] | null;
}

const initialState : PostResult = {
    loading: false,
    finish: false,
    error: null,
    data : null
};

export const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers: {
        // 동기적 작업 넣는 곳
    },
    extraReducers : builder => {
        builder
            .addCase(getAllPostAsyncAxios.pending, state => {
                state.loading = true;
            })
            .addCase(getAllPostAsyncAxios.fulfilled, (state, action) => {
               state.finish = true;
               state.data = action.payload;
            })
            .addCase(getAllPostAsyncAxios.rejected, (state, action) => {
                state.error = action.error.toString(); 
            });
    }
});