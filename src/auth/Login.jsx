import React from 'react';

export default function Login(){
    return (
        <div className='w-screen h-screen'>
            <div className='flex flex-col w-full h-full'>
                <div className='flex justify-center py-5 w-screen h-24'>
                    <div className='drop-shadow-md border-2 flex justify-between items-center px-4 py-2 shadow-soft-2xl rounded-blur bg-white/80 backdrop-blur-2xl w-4/6 h-16 rounded-full'>
                        <div className='py-2.375 basis-1/3'>
                            <p className='font-openSans whitespace-nowrap font-extrabold pl-5'>Switch Project Homepage</p>
                        </div>
                        <div className='basis-1/3 py-2.375 mr-4 ml-4'>
                            <div className='flex justify-around w-full'>
                                <div className='font-openSans'>dashBoard</div>
                                <div className='font-openSans'>profile</div>
                                <div className='font-openSans'>sign up</div>
                            </div>
                        </div>
                        <div className='basis-1/3 text-right pr-5'>
                            <button className='rounded-full leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft 
                            shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block 
                            cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all'>
                                test
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-screen grow'>
                    <div className='flex'>
                        <div className='basis-1/2'>
                            11
                        </div>
                        <div className='basis-1/2'>
                        <div className="bg-loginright bg-cover">

                            </div>
                            22
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}