import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import SideMenu from './SideMenu';

const Dashboard = lazy(() => import('./privateSubPage/Dashboard'));
const Posts = lazy(() => import('./privateSubPage/Posts'));
const Weather = lazy(() => import('./privateSubPage/Weather'));

export default function PrivateRouter(){
    return(
        <div className='flex flex-grow w-screen'>
            <div className='basis-1/5 h-screen bg-aliceblue'>
                <SideMenu/>
            </div>
            <div className='basis-4/5 h-screen'>
                <div>
                    <Routes>
                        <Route path="/dashboard" element={<Suspense fallback={<p>Loading Dashboard...</p>}><Dashboard/></Suspense>} />
                        <Route path="/posts" element={<Suspense fallback={<p>Loading Posts...</p>}><Posts/></Suspense>}/>
                        <Route path="/weather" element={<Suspense fallback={<p>Loading Weather...</p>}><Weather/></Suspense>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}