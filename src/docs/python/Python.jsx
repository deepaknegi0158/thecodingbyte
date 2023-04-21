import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../Components/Navbar'
import PythonImg from '../../Asserts/Images/HomePage/python.svg'

const Python = () => {
    return (
        <>
            <Helmet>
                <title>Python</title>
            </Helmet>
            <Navbar />

            <div className='px-5 lg:px-20 w-full'>
                <div className='mx-auto items-center'>
                    <div className='px-5 lg:px-20 my-5'>
                        <div className='flex flex-row'>
                            <div className='w-full'>
                                <div className='w-full px-5'>
                                    <div className='font-space text-5xl mt-10'>
                                        Python
                                    </div>
                                    <div className='mt-5 font-open text-[1.03rem]'>
                                        <p>Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. <br />
                                            Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-10 mx-auto px-10 lg:block hidden'>
                                <img src={PythonImg} className='w-[15rem]' alt="" />
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className='px-5 lg:px-20 mx-auto items-center mt-10'>
                        <div className='px-5'>
                            <div className='font-space text-2xl '>Content</div>
                            <div className='font-open text-[1.05rem] ml-5'>
                                <div className='mt-3 text-xl'>
                                    Introduction to Python
                                </div>
                                <div className='grid lg:grid-cols-2 px-2 py-1'>
                                    <a href="/docs/python/introduction-to-python">
                                        <span className='px-1 font-consolas text-base'>1.1</span> Introduction to Python</a>
                                    <a href="/docs/python/installing-python-and-environment-setup">
                                        <span className='px-1 font-consolas text-base'>1.2</span> Installing Python and Environment Setup</a>
                                    <a href="/docs/python/writing-and-executing-our-first-python-program">
                                        <span className='px-1 font-consolas text-base'>1.3</span> Writing and Executing our First Python Program</a>
                                </div>
                            </div>

                            <div className='font-open text-[1.05rem] ml-5'>
                                <div className='mt-3 text-xl'>
                                    Variables and Data Types
                                </div>
                                <div className='grid lg:grid-cols-2 px-2 py-1'>
                                    <a href="/docs/python/variables">
                                        <span className='px-1 font-consolas text-base'>2.1</span> Variables</a>
                                    <a href="/docs/python/data-types">
                                        <span className='px-1 font-consolas text-base'>2.2</span> Data Types</a>
                                </div>
                            </div>

                            <div className='font-open text-[1.05rem] ml-5'>
                                <div className='mt-3 text-xl'>
                                    Operators, Precedence and Associativity
                                </div>
                                <div className='grid lg:grid-cols-2 px-2 py-1'>
                                    <a href="/docs/python/variables">
                                        <span className='px-1 font-consolas text-base'>3.1</span> Operators</a>
                                    <a href="/docs/python/data-types">
                                        <span className='px-1 font-consolas text-base'>3.2</span> Data Types</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Python