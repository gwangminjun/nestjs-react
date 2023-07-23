import React from 'react';
import rigthImage from '../static/img/login-Right.jpg';
import github from '../static/img/github.svg';
import reactImg from '../static/img/react.png';
import reduxImg from '../static/img/redux.png';
import nestjsImg from '../static/img/nestjs.png';
import typeScriptImg from '../static/img/typescript.png';
import ubuntuImg from '../static/img/ubuntu.png';
import dockerImg from '../static/img/docker.png';
import LoginFrom from './LoginFrom';
import LoginNavi from './LoginNavi';

export default function Login(){
    return (
        <div className='w-screen h-screen'>
            <div className='flex flex-col w-full h-full'>
                <div className='flex justify-center py-5 w-screen h-24'>
                    <LoginNavi/>
                </div>
                <div className='w-screen grow'>
                    <div className='flex h-4/5'>
                        <div className='basis-1/2 flex justify-center items-center'>
                            <LoginFrom/>
                        </div>
                        <div className='basis-1/2 overflow-hidden rounded-lg drop-shadow-lg'>
                            <img src={rigthImage} className='h-full'></img>
                        </div>
                    </div>
                    <div className='h-1/5'>
                        <div className='w-full h-full flex justify-around items-center'>
                            <img src={reactImg} className='h-16'/>
                            <img src={reduxImg} className='h-16'/>
                            <img src={nestjsImg} className='h-16'/>
                            <img src={typeScriptImg} className='h-16'/>
                            <img src={dockerImg} className='h-16'/>
                            <img src={ubuntuImg} className='h-16'/>
                            <img src={github} className='h-16'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}