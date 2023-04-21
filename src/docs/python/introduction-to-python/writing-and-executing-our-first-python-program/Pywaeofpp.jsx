import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../../../Components/Navbar'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import { GoCalendar } from 'react-icons/go'

const pydt = () => {
  return (
    <>
      <Helmet>
        <title>Writing and Executing our First Python Program</title>
      </Helmet>
      <Navbar />

      <div className='relative z-0 p-0'>
        <div className='m-0 md:px-[7.5rem] px-10'>
          <main className='main text-base max-w-[50rem] mx-auto justify-center'>
            <header className='px-2 font-sans mt-5'>
              <div className='flex justify-between'>
                <div className=''>
                  Introduction to Python
                </div>
                <div className='flex mt-2 text-slate-700'>
                  < GoCalendar className='mt-1' />
                  <div className='ml-2 font-consolas'>April 18, 2023</div>
                </div>
              </div>
              <h1 className='my-3 text-3xl'>Writing and Executing our First Python Program</h1>
            </header>
            <div className='px-2 font-open'>
              <p>
                The first program that many people write when learning a new programming language is the "Hello, World!" program. This program simply displays the text "Hello, World!" on the screen.
              </p>
              <p>
                Here's an example of how you would write the "Hello, World!" program in Python:
              </p>
              <pre className='py'>
                <code>
                  <span className="fun">print</span>(<span className="string">"Hello World!"</span>)
                </code>
              </pre>
              <p className='mt-5'>
                The print () function is used to output text or other values to the screen. The text or values to be printed are passed as arguments to the print () function.
                Congratulations! you have just written your first Python program.
              </p>
              <p>
                You can save this code in a file with the ".py" extension, for example "hello.py" and run it from the command line using the command python hello.py or python3 hello.py depending on your system.
              </p>
              <p>
                Alternatively, you can also run the above code directly in the interactive Python interpreter by typing it in one line at a time and pressing enter after each line.
              </p>
              <p>
                Another way to run python code is by using an IDE (Integrated Development Environment) like Visual Studio Code, PyCharm or IDLE, where you can create, edit and run python files easily.
              </p>


            </div>
            <div >
              <a href="/docs/python/installing-python-and-environment-setup" title='Installing Python and Environment Setup' className='fixed top-1/2 left-[13rem] hidden xl:block'>
                <BsChevronLeft size={25} />
              </a>
              <a href="/" className='fixed top-1/2 right-[13rem] hidden xl:block'>
                <BsChevronRight size={25} />
              </a>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default pydt