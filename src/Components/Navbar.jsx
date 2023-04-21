import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full my-2 lg:px-10 px-2 border-b'>
      <div className='block px-10'>
        <div className='flex justify-between lg:px-8 px-1'>
          <div className='font-space md:text-xl text-base md:mb-0 mb-2'>
            <a href="/" className='flex p-1 border border-black rounded-lg'>
              <div className='p-1 bg-black text-white rounded-lg'>The Coding</div>
              <div className='p-1'>Byte</div>
            </a>
          </div>
          <div className='lg:grid grid-flow-col hidden'>
            <ul className='flex space-x-6 mr-[20px] p-2 font-poppins mt-1'>
              <li>Home</li>
              <li>Docs</li>
              <li>Reference</li>
              <li>About us</li>
            </ul>
          </div>
          <div className='p-2 hidden md:block'>
            <button className='px-5 bg-blue-500 text-white rounded-lg ml-4 py-1 font-space text-lg'>Log In</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar