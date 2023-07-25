import React from 'react';
import SideMenu from './SideMenu';
import Dashboard from './Dashboard';

export default function PrivateRouter(){
    return(
        <div className='flex flex-grow w-screen'>
            <div className='basis-1/5 h-screen bg-aliceblue'>
                <SideMenu/>
            </div>
            <div className='basis-4/5 h-screen'>
                <Dashboard/>
            </div>
        </div>
    )
}