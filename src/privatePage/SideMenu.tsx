import React from "react";
import logoTriangle from '../static/img/Switch-triangle.png';
import Dashboard from './Dashboard';
import dashboardImg from '../static/img/dashboard.png'
import posts from '../static/img/posts.png'
import weather from '../static/img/weather.png'

export default function SideMenu(){
    return (
        <div className="h-screen bg-slate-100">
            <div className="h-full rounded-br-lg">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500	shadow-xl rounded-b-lg flex justify-start content-center decoration-white">
                    <div className="flex-wrap text-white text-4xl w-full flex h-24 content-center justify-center font-Monoton">Switch Project</div>
                </div>
                <div>
                    <div>
                        <ol className="font-Monoton p-8 text-center text-4xl">
                            <li className="flex cursor-pointer focus:text-pink-600 m-5">
                                <div className="hover:animate-bounce flex items-center w-fit">
                                    <img src={dashboardImg} className="w-11"/>
                                    <div className="w-full">Dashboard</div>
                                </div>
                            </li>
                            <li className="hover:animate-bounce flex cursor-pointer focus:text-pink-600 m-5">
                                <div className="flex items-center w-fit">
                                    <img src={posts} className="w-11"/>
                                    <div className="w-full">Post</div>
                                </div>
                            </li>
                            <li className="hover:animate-bounce flex cursor-pointer focus:text-pink-600 m-5">
                                <div className="flex items-center w-fit">
                                    <img src={weather} className="w-11"/>
                                    <div className="w-full">Weather</div>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div className="content-center justify-center bottom-0 fixed h-24 flex w-screen bg-black text-white  flex-wrap">
                        Switch Project React & NestJs
                    </div>
                </div>
            </div>
        </div>
    );
}