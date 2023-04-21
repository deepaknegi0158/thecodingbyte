import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../../../Components/Navbar'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import { GoCalendar } from 'react-icons/go'

const pydt = () => {
  return (
    <>
      <Helmet>
        <title>Installing Python and Environment Setup</title>
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
                  <div className='ml-2 font-consolas'>April 17, 2023</div>
                </div>
              </div>
              <h1 className='my-3 text-3xl'>Installing Python and Environment Setup</h1>
            </header>
            <div className='px-2 font-open'>
              <p>There are multiple methods to install Python on your computer, which mainly depend on your operating system and your preference for installing a specific or the latest version of Python. Here are the fundamental procedures to follow when installing Python on some of the commonly used operating systems:</p>

              <ul>
                <li>Windows</li>
                <ul className='list-decimal ml-5'>
                  <li>Go to the official Python website (<a className='text-blue-600' href="https://www.python.org/" target='null'>https://www.python.org/</a>) and click on the "Downloads" link.
                  </li>
                  <li>Scroll down to the "Windows" section and click on the "Download" button for the latest version of Python (or a &specific version, if desired).
                  </li>
                  <li>Run the installer and follow the prompts to install Python on your computer.</li>
                  <li>Verify the installation by opening a command prompt and typing python to launch the Python interpreter.
                  </li>
                </ul>

                <li className='mt-5'>MaxOS</li>
                <ul className='list-decimal ml-5'>
                  <li>
                    Go to the official Python website (<a className='text-blue-600' href="https://www.python.org/" target='null'>https://www.python.org/</a>) and click on the "Downloads" link.
                  </li>
                  <li>
                    Scroll down to the "macOS" section and click on the "Download" button for the latest version of Python (or a specific version, if desired).
                  </li>
                  <li>
                    Run the installer package and follow the prompts to install Python on your computer.
                  </li>
                  <li>
                    Verify the installation by opening a terminal and typing python3 to launch the Python interpreter.
                  </li>
                </ul>

                <li className='mt-5'>Linux:</li>
                <ul className='list-decimal ml-5'>
                  <li>
                    Open a terminal and use your distribution package manager to install Python.
                  </li>
                  <li>
                    For example, on Ubuntu, you can use the following command to install the latest version of Python: <br />
                    <pre className='py bg-slate-100 p-2 bg-opacity-60 border-l-2 border-blue-700 overflow-auto'><code>
                      <span className="fun">sudo apt-get install python3</span>
                    </code></pre>
                  </li>
                  <li>
                    Verify the installation by typing python3 in the terminal to launch the Python interpreter.
                  </li>
                  <li>
                    Once you've installed Python, you can start using it by running Python scripts, using the interactive interpreter, or by using an IDE (Integrated Development Environment) such as IDLE, PyCharm, or Visual Studio Code.
                  </li>
                </ul>
              </ul>

              <p className='mt-5'>
                It is essential to mention that Python includes a package manager known as pip. This package manager is beneficial for users as it facilitates the effortless installation and management of packages and libraries for Python. This feature can significantly aid in expanding the functionality of Python.
              </p>







            </div>
            <div >
              <a href="/docs/python/introduction-to-python" title='Introdution to Python' className='fixed top-1/2 left-[13rem] hidden xl:block'>
                <BsChevronLeft size={25} />
              </a>
              <a href="/docs/python/writing-and-executing-our-first-python-program" title='Writing and Executing our First Python Program' className='fixed top-1/2 right-[13rem] hidden xl:block'>
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