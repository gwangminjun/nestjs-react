import React from 'react';
import SideMenu from './SideMenu';
import Dashboard from './Dashboard';

export default function PrivateRouter(){
    return(
        <div className='flex flex-grow w-screen'>
            <div className='basis-1/5'>
                <SideMenu/>
            </div>
            <div className='basis-4/5'>
                <Dashboard/>
            </div>
        </div>
    )
}