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

            <div className='relative z-0 p-0'>
                <div className='m-0 md:px-[7.5rem] px-10'>
                    <main className='main text-base max-w-[50rem] mx-auto justify-center'>
                        <header className='px-2 font-sans mt-5'>
                            <div className='flex justify-between'>
                                <div className=''>
                                    Data Types
                                </div>
                                <div className='flex mt-2 text-slate-700'>
                                    < GoCalendar className='mt-1' />
                                    <div className='ml-2 font-consolas'>March 03, 2023</div>
                                </div>
                            </div>
                            <h1 className='my-3 text-3xl'>Data Types</h1>
                        </header>
                        <div className='px-2 font-open'>
                            <p>
                                In the preceding article, we discussed how variables can hold values of different types. As a result, various data types are necessary to store diverse values in a variable. For instance, a person's age can be kept in an integer type variable, while their name can be kept in a string type variable. Python offers multiple data types, such as integer, float, string, boolean, and none, depending on the type of data.
                            </p>
                            <p>
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

                            <h2 className='mt-5'>Numbers</h2>
                            <h3>Integer</h3>
                            <p>Integer values, also referred to as int in Python, are a type of numeric data that represent whole numbers, such as 0, 3, and -5. These numbers range from negative infinity to positive infinity. Unlike some other programming languages, such as Java and C++, Python does not have different versions of integer representations based on the memory size the value occupies.</p>

                            <pre className='py'>
                                <code>
                                    <span className="variable">x</span><span className="operator"> = </span><span className="num">10</span> <br />
                                    <span className="fun">print</span>(<span className="fun">type</span>())  <span className="comment"># class 'int'</span> <br /><br />
                                    <span className="variable">x</span><span className="operator"> = </span><span className="num">100000000000</span> <br />
                                    <span className="fun">print</span>(<span className="fun">type</span>())  <span className="comment"># class 'int'</span>
                                </code>
                            </pre>

                            <h3 className='mt-3'>Float</h3>
                            <p>Floating-point values refer to values that represent real numbers, including both rational numbers such as 5.25 and irrational numbers such as 314.777. These numbers can be expressed using a decimal representation, and they are a vital type of numeric data used in programming.</p>
                            <pre className='py'>
                                <code>
                                    <span className="variable">x</span><span className="operator"> = </span><span className="num">5.25</span> <br />
                                    <span className="fun">print</span>(<span className="fun">type</span>())  <span className="comment"># &lt;class 'float'&gt;</span> <br /><br />
                                    <span className="variable">x</span><span className="operator"> =</span><span className="num"> 314.77777</span> <br />
                                    <span className="fun">print</span>(<span className="fun">type</span>())  <span className="comment"># &lt;class 'float'&gt;</span>
                                </code>
                            </pre>

                            <h3 className='mt-3'>Complex Number</h3>
                            <p>Python has the ability to support complex numbers, which can be expressed in the form of &lt;a + bj&gt;, where 'a' and 'b' are real numbers, and 'j' represents the imaginary part of the number. Complex numbers are an essential type of numeric data used in many programming applications, including scientific and engineering computations.</p>

                            <pre className='py'>
                                <code>
                                    <span className="variable">x</span><span className="operator"> = </span><span className="num">10</span><span className="operator"> + </span><span className="number">2</span><span>j</span> <br />
                                    <span className="fun">print</span>(<span className="string">'x: '</span>, <span className="variable">x</span>)  <span className="comment"># x: (10 + 2j)</span> <br />
                                    <span className="fun">print</span>(<span className="fun">type</span>(<span className="var">x</span>)) <br />
                                    <span className="fun">print</span>(<span className="string">'real part:'</span>, x.real ) <span className="comment"># real part: 10.0</span> <br />
                                    <span className="fun">print</span>(<span className="string">'imaginary part:'</span>, x.imag ) <span className="comment"># imaginary part: 2.0</span>
                                </code></pre>

                            <h3 className='mt-3'>Strings</h3>
                            <p>String values are created by combining letters, numerals, and special characters, forming a sequence of characters referred to as a string. These strings can be enclosed using either single or double quotes, and they are a crucial data type used in programming.</p>

                            <pre className='py'>
                                <code>
                                    <span className="var">str</span><span className="operator"> = </span><span className="string">'Hello World!'</span> <br />
                                    <span className="fun">print</span>(<span className="string">'str: '</span>, <span className="var">str</span> ) <span className="comment"># str: Hello World!</span> <br />
                                    <span className="fun">print</span>(<span className="fun">type</span>(<span className="var">str</span>)) <span className="comment"># &lt;class 'str'&gt;</span>
                                </code>
                            </pre>

                            <p className='mt-3'>Multi-line sentences can be enclosed in triple quotes.</p>
                            <pre className='py'>
                                <code>
                                    <span className="var">str</span><span className="operator"> = </span><span className="string">''' This is line 1 <br />This is line 2 <br />. <br />. <br />This is line n <br />'''    </span> <br />
                                    <span className="fun">print</span>(<span className="fun">type</span>(<span className="var">str</span>)) <span className="comment"># &lt;class 'str'&gt;</span>
                                </code>
                            </pre>

                            <h3 className='mt-3'>Booleans</h3>
                            <p>Boolean values, which are referred to as bool in Python, can take one of two possible values: True and False (note that T and F must be capitalized). True and False also have integer equivalents of 1 and 0, respectively. Boolean values are an important data type used in programming, particularly in decision-making processes where conditions must be evaluated as either true or false.</p>

                            <pre className='py'>
                                <code>
                                    <span className="var">x</span> <span className="operator">=</span> <span className="bool">True</span> <br />
                                    <span className="var">x</span> <span className="operator">=</span> <span className="bool">False</span> <br />
                                    <span className="fun">print</span>(<span className="fun">type</span>(x)) <span className="comment"># &lt;class 'bool'&gt;</span> <br />
                                    <span className="fun">print</span>(<span className="fun">type</span>(x)) <span className="comment"># &lt;class 'bool'&gt;</span>
                                </code>
                            </pre>

                            <h3 className='mt-3'>Lists</h3>
                            <p>The list is a unique and flexible data type available exclusively in Python. In some ways, it is similar to the array in languages like C/C++. However, unlike arrays, Python lists can hold different types of data. A list is a formally ordered sequence of data, which is written using square brackets ([]), with commas separating each element. Lists are an essential data type in Python, and they are used in a variety of programming applications.</p>

                            <pre className='py'>
                                <code>
                                    <span className="var">a</span><span className="operator"> = </span>[<span className="num">1</span>,<span className="num"> 2</span>,<span className="num"> 3</span>,<span className="num"> 4</span>,<span className="num"> 5</span>] <br />
                                    <span className="fun">print</span>(<span className="var">a</span>)       <span className="comment"># [1, 2, 3, 4, 5]</span> <br />
                                    <span className="fun">print</span>(<span className="fun">type</span>(<span className="var">a</span>)) <span className="comment"># &lt;class 'list'&gt;</span> <br /> <br />

                                    <span className="var">b</span><span className="operator">=</span>[<span className="string">"hey"</span>,<span className="string">"you"</span>, <span className="num">1</span>, <span className="num">2</span>, <span className="num">3</span>, <span className="string">"go"</span>] <br />
                                    <span className="fun">print</span>(<span className="var">b</span>)       <span className="comment"># ['hey', 'you', 1, 2, 3, 'go']</span> <br />
                                    <span className="fun">print</span>(<span className="fun">type</span>(<span className="var">b</span>)) <span className="comment"># &lt;class 'list'&gt;</span>
                                </code>
                            </pre>

                            <h3 className='mt-3'>Tuple</h3>
                            <p>
                                The tuple is another data type which is a sequence of data similar to a list. But it is immutable. That means data in a tuple is write-protected. Data in a tuple is written using parenthesis and commas.
                            </p>

                            <pre className='py'>
                                <code>
                                    <span className="var">a</span><span className="operator"> = </span>(<span className="num">1</span>, <span className="num">2</span>, <span className="num">3</span>, <span className="num">4</span>) <br />
                                    <span className="fun">print</span>(<span className="var">a</span>) <span className="comment"># (1, 2, 3, 4)</span> <br /><br />

                                    <span className="var">b</span> <span className="operator">=</span>(<span className="string">"hello"</span>, <span className="num">1</span>, <span className="num">2</span>, <span className="num">3</span>, <span className="string">"go"</span>) <br />
                                    <span className="fun">print</span>(<span className="var">b</span>) <span className="comment"># ('hello', 1, 2, 3, 'go')</span>
                                </code>
                            </pre>

                            <h3 className='mt-3'>Dictionary</h3>
                            <p>
                                Python dictionary is an unordered sequence of data of key-value pair form. It is similar to the hash table type. Dictionary are written within curly braces in the form of key:value. It is very useful to retrieve data in an optimized way among a large amount of data.
                            </p>

                            <pre className='py'>
                                <code>
                                    <span className="var">a</span><span className="operator"> = </span>&#10100;<span className="num">1</span><span className="string">"First name"</span>  
                                </code>
                            </pre>






                        </div>
                        <div >
                            <a href="/docs/python/variables" title='Variables' className='fixed top-1/2 left-[13rem] hidden xl:block'>
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