import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type UserInfo = {id : string, password : string};

export const loginAxios = createAsyncThunk( 'auth/loginCertification', async(userinfo : UserInfo) => {
    try{
        const response = await axios.post('/auth/postLogin', userinfo, {withCredentials: true});
        const token = response.data.accessToken;
        if(token){
            document.cookie = `token=${token}; path=/;`; // 토큰을 쿠키에 저장
            return true
        }else{
            return false
        }
    }catch(error){
        throw new Error('로그인 실패하였습니다');
    }
});

// 로그아웃 시 쿠키에서 토큰 삭제하는 함수
export const logout = () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'; 
  };