import React, { useEffect } from 'react';
import { getAllPostAsyncAxios } from '../../RTK/postRTK/postAsyncThunk';
import { useAppDispatch, useAppSelector } from '../../RTK/store';

export default function Posts(){
    const dispatch = useAppDispatch();

    const postData = useAppSelector(state => state.post.data);

    const postItemLi = postData?.map(v => <li key={v.uid}>TITLE : {v.title}, CONTENTS : {v.contents}, STATUS : {v.status}</li>);
    useEffect(() => {
        dispatch(getAllPostAsyncAxios(null));
      }, []);

    return(
        <div className='h-9/10'>
            <ul>
                {postItemLi}
            </ul>
        </div>
    )
}