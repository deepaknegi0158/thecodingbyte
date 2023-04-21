import React from 'react'
import Python from '../Asserts/Images/HomePage/python.svg'
import JavaScript from '../Asserts/Images/HomePage/javascript.svg'
import Cpp from '../Asserts/Images/HomePage/cpp.svg'
import ShapeDivider from '../Asserts/Images/HomePage/shapedivider.svg'
const Lang = () => {
    return (
        <>
            <div className='-mt-10'>
                <img src={ShapeDivider} className='w-full h-20' alt="" />
            </div>
            <div className='md:px-[10rem] px-[5rem] w-full mb-10 bg-[#FFBF23]'>
                <div className='mx-auto items-center'>
                    <div className='pt-5 text-2xl font-poppins'>Select what you'd like to study</div>
                    <div className='grid lg:grid-cols-3 mt-5 md:px-10 px-2'>
                        <div className='p-4'>
                            <div className='rounded-xl bg-white'>
                                <a href="/docs/python" className='flex'>
                                    <img src={Python} className='w-[5rem] p-1 hidden md:block' alt="" />
                                    <span className='py-6 ml-4 text-2xl font-space'>Python</span>
                                </a>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className='rounded-xl bg-white'>
                                <a href="/" className='flex'>
                                    <img src={JavaScript} className='w-[5rem] p-1 hidden md:block' alt="" />
                                    <span className='py-6 ml-4 text-2xl font-space'>JavaScript</span>
                                </a>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className='rounded-xl bg-white'>
                                <a href="/" className='flex'>
                                    <img src={Cpp} className='w-[5rem] p-1 hidden md:block' alt="" />
                                    <span className='py-5 ml-4 text-2xl font-space'>C++</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Lang