import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export interface PostParam{
    uid : number | null;
    title : string | null;
    contents : string | null;
    status : string | null;
}

export const getAllPostAsyncAxios = createAsyncThunk('authorized/posts', async(postParam : PostParam | null) => {
    const token = Cookies.get('accessToken');
    try{
        const response = await axios.get('/posts/getAllPost', { 
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        });
        return (await response.data);
    }catch(error){
        throw new Error('에러가 발생했습니다.');
    }
});