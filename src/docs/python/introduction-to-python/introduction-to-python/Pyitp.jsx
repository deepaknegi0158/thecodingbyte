import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../../../Components/Navbar'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import { GoCalendar } from 'react-icons/go'

const pydt = () => {
    return (
        <>
            <Helmet>
                <title>Introduction to Python</title>
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
                            <h1 className='my-3 text-3xl'>Introduction to Python</h1>
                        </header>
                        <div className='px-2 font-open'>
                            <p>Python is a widely-used high-level programming language that finds applications in diverse areas such as web development, scientific computing, data analysis, artificial intelligence, and more. One of the key reasons for its popularity is its user-friendly and easy-to-read syntax, which makes it an ideal choice for both novice and experienced programmers alike.
                            </p>
                            <p>Additionally, Python is an open-source language, implying that it is freely available for use and distribution. Its flexibility and versatility are further enhanced by a large community of developers who continuously contribute to its development and maintenance.</p>

                            <h2>Why python</h2>
                            <p>Python is a language with a range of important features, some of which include:</p>
                            <ul className='list-disc ml-5'>
                                <li>Dynamic typing: This means that in Python, variable types are determined at runtime, rather than being explicitly defined by the programmer. </li>
                                <li>Interpreted: Unlike languages that require compilation to machine code, Python code is interpreted by an interpreter. As a result, it can be run on a wide range of platforms with ease. </li>
                                <li>Standard library: Python includes an extensive library of pre-written code that can be used for a variety of tasks, including working with data, connecting to web servers, and reading and writing files.
                                </li>
                                <li>Third-party libraries: Python has a vast and active community of developers who have created numerous third-party libraries that can be used to extend the functionality of the language.
                                </li>
                                <li>Object-oriented: Python is an object-oriented language that supports the creation of reusable and modular code. This feature allows for more efficient and streamlined programming.
                                </li>
                            </ul>

                            <p className='mt-5'>Python is a versatile language that has diverse applications, ranging from web development and data analysis to machine learning and scientific computing. Some of the most widely used Python libraries include NumPy, which is used for scientific computing, pandas, which is utilized for data analysis, and TensorFlow, which is popular for machine learning applications.</p>
                        </div>
                        <div >
                            <a href="/" className='fixed top-1/2 left-[13rem] hidden xl:block'>
                                <BsChevronLeft size={25} />
                            </a>
                            <a href="/docs/python/installing-python-and-environment-setup" title='Installing Python and Environment Setup' className='fixed top-1/2 right-[13rem] hidden xl:block'>
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