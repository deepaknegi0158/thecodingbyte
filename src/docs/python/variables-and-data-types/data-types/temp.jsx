import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../../../Components/Navbar'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import { GoCalendar } from 'react-icons/go'

const pydt = () => {
    return (
        <>
            <Helmet>
                <title>Data Types</title>
            </Helmet>
            <Navbar />

            <div className='w-full lg:px-20 px-10 mb-10'>
                <div className='lg:px-20 px-5 mx-auto items-center'>
                    <div className='flex'>
                        <div className='fixed top-1/2 hidden lg:block'>
                            <a href="/">
                                <BsChevronLeft size={25} />
                            </a>
                        </div>
                        <div className='fixed top-1/2 right-[10rem] hidden lg:block'>
                            <a href="/">
                                <BsChevronRight size={25} />

                            </a>
                        </div>

                        { // main content starts
                        }
                        <div className='w-full mx-10 px-8 shadow'>
                            <div className='p-1'>
                                <header className='px-2 font-sans mt-2'>
                                    <div className='flex justify-between'>
                                        <div className=''>
                                            Data Types
                                        </div>
                                        <div className='flex mt-2 text-slate-700'>
                                            < GoCalendar className='mt-1' />
                                            <div className='ml-2 font-consolas'>March 03, 2023</div>
                                        </div>
                                    </div>
                                    <h1 className='mt-5 text-3xl'>Data Types</h1>
                                </header>

                                <div className='px-2'>
                                    <p>
                                        In the previous article, we saw that variables can contain values of different type. Therefore, different data types are required to store different kinds of values in a variable. For example, a person's age can be stored in an integer type variable, whereas his name can be stored in a string type variable. So, depending on the type of data, Python provides various data types such as integer, float, strings, boolean, and none.
                                        Python Data types are used to define the type of a variable. In this article we'll list out all the data types and discuss the functionality of each.
                                    </p>
                                    <ul className='mt-2 list-disc ml-10'>
                                        <li>Numbers: int, float, complex</li>
                                        <li>Strings</li>
                                        <li>Boolean (True/False)</li>
                                        <li>Lists</li>
                                        <li>Tuples</li>
                                        <li>Sets</li>
                                        <li>Dictionaries</li>
                                    </ul>

                                    <h2 className=' mt-5'>Numbers</h2>
                                    <h3>Integer</h3>
                                    <p>Integer value, known as int in Python, are numeric data that represents whole numbers such as 0, 3 and -5. The range of whole numbers varies from -∞ to +∞. Unlike other programming languages like Java and C++, Python does not have different versions of integer representation based on the size of the memory the value occupies.</p>

                                    <pre className='py bg-slate-100 p-2 bg-opacity-60 border-l-2 border-blue-700'>
                                        <code>
                                            <span className="variable">x</span><span className="operator"> = </span><span className="num">10</span> <br />
                                            <span className="fun">print</span>(<span className="fun">type</span>())         <span className="comment"># class 'int'</span> <br /><br />
                                            <span className="variable">x</span><span className="operator">=</span><span className="num">100000000000</span> <br />
                                            <span className="fun">print</span>(<span className="fun">type</span>())         <span className="comment"># class 'int'</span>
                                        </code>
                                    </pre>

                                    <h3>Float</h3>
                                    <p>Floating-point values are values that represents real numbers. Real numbers include all rational numbers such as 5.25 and all irrational numbers such as 314.777. Any real number can be expressed by a decimal representation. </p>
                                    <pre className='py bg-slate-100 p-2 bg-opacity-60 border-l-2 border-blue-700'>
                                        <code>
                                            <span className="variable">x</span><span className="operator"> = </span><span className="num">5.25</span> <br />
                                            <span className="fun">print</span>(<span className="fun">type</span>())         <span className="comment"># &lt;class 'float'&gt;</span> <br /><br />
                                            <span className="variable">x</span><span className="operator">=</span><span className="num"> 314.77777</span> <br />
                                            <span className="fun">print</span>(<span className="fun">type</span>())         <span className="comment"># &lt;class 'float'&gt;</span>
                                        </code>
                                    </pre>

                                    <h3>Complex Number</h3>
                                    <p>Python can also support complex numbers, that is, numbers which can be expressed in the form of &lt;a + bj&gt;, where a and b are real numbers, and j represents the imaginary part of the number.</p>

                                    <pre className='py'><code>
                                        <span className="variable">x</span><span className="operator"> = </span><span className="num">10</span><span className="operator"> + </span><span className="number">2</span><span>j</span> <br />
                                        <span className="fun">print</span>(<span className="string">'x: '</span>, <span className="variable">x</span>)              <span className="comment"># x: (10 + 2j)</span> <br />
                                        <span className="fun">print</span>(<span className="fun">type</span>(<span className="var">x</span>))
                                    </code></pre>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default pydt