import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full my-2 lg:px-10 px-2 border-t'>
            <div className='block px-10'>
                <div className='font-space text-xl mt-10'>
                    <a href="/" className='w-[11.5rem] flex p-1 border border-black'>
                        <div className='p-1 bg-black text-white'>The Coding</div>
                        <div className='p-1'>Byte</div>
                    </a>
                </div>
                <div className='flex mt-5 px-4'>
                    <div className='w-full'>
                        <div className='text-xl font-space'>Programming Language
                        </div>
                        <ul className='ml-5 text-lg'>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>C++</li>
                        </ul>
                    </div>

                    <div className='w-full'>
                        <div className='text-xl font-space'>Useful Links</div>
                        <ul className='underline text-lg'>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <div className='text-xl'>Follow</div>
                        <div className=''>Sign up to get the latest news on our product.</div>
                        <div className='flex border w-full h-10'></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer