import React from 'react'
import codeperson from '../Asserts/Images/HomePage/codeperson.svg'
const Hero = () => {
    return (
        <div className='lg:px-20 lg:mt-10 h-[96vh]'>
            <div className='flex md:flex-row'>
                <div className='w-full'>
                    <div className='mt-[5rem] px-10'>
                        <div className='pl-10 font-space text-[3.05rem] leading-[4rem]'>Learn Coding <br /> One Byte <br /> at a Time.</div>
                        <div className='pl-10 text-left text-lg mt-10 font-poppins text-gray-800'>Everyone in this country should learn how to program because it teaches you how to think.</div>
                        <div className='text-right font-poppins text-lg text-gray-800'>- Steve Jobs</div>
                    </div>
                    <div className='p-2 px-10 mt-5'>
                        <button className='bg-indigo-600 px-3 py-1 ml-10 text-xl rounded-xl text-white border font-space border-black'>Get Started</button>
                        <button className='bg-gray-300 px-3 py-1 ml-5 text-xl rounded-xl font-space border border-black'>Get Started</button>
                    </div>
                </div>
                <div className='w-full lg:block hidden'>
                    <img src={codeperson} className='px-20 mt-[5rem]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero