import React from 'react';
import { loginAxios } from '../RTK/authRTK/loginAsyncThunk';
import { useDispatch } from 'react-redux';

export default function LoingForm(){

    const dispatch = useDispatch();

    const loginAxiosExe = (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.target);
        const id = formData.get('id'); 
        const password = formData.get('password');

        if(id || password){
            dispatch(loginAxios({id, password}));
        }else{
            alert('아이디와 패스워드를 입력해주세요');
        }
    };

    return(
        <form onSubmit={loginAxiosExe} className='w-1/2'>
            <div className='flex flex-col w-full h-full'>
                <div className='text-7xl pb-2.5 drop-shadow-lg'>Welcome!</div>
                <input type="text" name="id" placeholder="아이디를 입력하세요" className='border h-16 mb-4 rounded-lg px-8 drop-shadow-lg'/>
                <input type="password" name="password" placeholder="비밀번호를 입력하세요" className='border h-16 mb-4 rounded-lg px-8 drop-shadow-lg'/>
                <div className='text-right h-16'>
                    <button type="submit" className='w-1/4 h-4/5 text-white bg-sky-500 hover:bg-sky-700 rounded-lg drop-shadow-lg'>로그인</button>
                </div>
            </div>
        </form>
    );
}