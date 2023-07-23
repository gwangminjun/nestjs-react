import React from 'react';
import { loginAxios } from '../RTK/authRTK/loginAsyncThunk';
import { useSelector, useDispatch } from 'react-redux';

export default function LoingForm(){

    const dispatch = useDispatch();

    const loginAxiosExe = (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.target);
        const id = formData.get('id'); 
        const password = formData.get('password');

        if(id && password){
            dispatch(loginAxios({id, password}));
        }else{
            alert('아이디와 패스워드를 입력해주세요');
        }
    };

    const { loading, error } = useSelector((state) => state.auth);
    
    const inputClass = 'border h-16 mb-4 rounded-lg px-8 drop-shadow-lg';

    return(
        <form onSubmit={loginAxiosExe} className='w-1/2'>
            <div className='flex flex-col w-full h-full'>
                <div className='text-7xl pb-2.5 drop-shadow-lg'>Welcome!</div>
                <input type="text" name="id" placeholder="아이디를 입력하세요" className={error ? `${inputClass} border-rose-600` : inputClass}/>
                <input type="password" name="password" placeholder="비밀번호를 입력하세요" className={error ? `${inputClass} border-rose-600` : inputClass}/>
                {error && <div className='text-red-600'>아이디와 패스워드를 확인하세요</div>}
                <div className='text-right h-16'>
                    <button type="submit" className='w-1/4 h-4/5 text-white bg-sky-500 hover:bg-sky-700 rounded-lg drop-shadow-lg'>
                        {loading === false 
                            ? <div> 로그인 </div> : 
                            <div className='flex justify-center items-center'>
                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span>처리중...</span>
                            </div>}
                    </button>
                </div>
            </div>
        </form>
    );
}