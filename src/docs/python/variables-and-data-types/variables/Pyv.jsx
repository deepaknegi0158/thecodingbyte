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
                                    Variables and Data Types
                                </div>
                                <div className='flex mt-2 text-slate-700'>
                                    < GoCalendar className='mt-1' />
                                    <div className='ml-2 font-consolas'>April 20, 2023</div>
                                </div>
                            </div>
                            <h1 className='my-3 text-3xl'>Variables</h1>
                        </header>
                        <div className='px-2 font-open'>
                            <p>
                                One of the most influential capabilities of programming languages is the ability to manipulate variables. A variable is essentially a name that denotes a value and serves as a means to store data values in a program, which can be accessed and altered at a later stage.
                            </p>
                            <p>
                                In Python, creating a variable is a simple task that involves assigning a value to a specified variable name.
                            </p>
                            <pre className='py'>
                                <code>
                                    <span className="var">variable_name</span> <span className="operator">=</span> <span className="num">value</span>
                                </code>
                            </pre>

                            <p className='mt-5'>
                                Python uses assignment operator (=) to assign values to variables. There's no need to declare a variable in advance (or to assign a data type to it), assigning a value to a variable itself declares and initializes the variable with the value. There's no way to declare a variable without assigning it an initial value.
                            </p>

                            <pre className='py'>
                                <code>
                                    <span className="var">msg</span><span className="opeator"> = </span><span className="string">"Hello Python World"</span><br />
                                    <span className="var">n</span><span className="opeator"> = </span><span className="num">10</span><br />
                                    <span className="var">pi</span><span className="opeator"> = </span><span className="num">3.1415926535897931</span><br />
                                </code>
                            </pre>

                            <p className="mt-5">
                                Every variable holds a value, which is the information associated with the variable. We can also change the value of a variable at any time and Python will always keep track of its current value:
                            </p>

                            <pre className='py'>
                                <code>
                                    <span className="var">msg</span><span className="opeator"> = </span><span className="string">"Hello Python World"</span><br />
                                    <span className="fun">print</span>(<span className="var">msg</span>) <span className="comment"># Hello Python World</span> <br />
                                    <span className="var">msg</span><span className="opeator"> = </span><span className="string">"Hello again!"</span><br />
                                    <span className="fun">print</span>(<span className="var">msg</span>) <span className="comment"># Hello again!</span>
                                </code>
                            </pre>

                            <p className="mt-5">
                                To check the data type of a variable we use the type () function. Consider the following expression:
                            </p>
                            <pre className='py'>
                                <code>
                                    <span className="fun">print</span>(<span className="fun">type</span>(<span className="var">msg</span>)) <span className="comment"># &lt;class 'str'&gt;</span> <br />
                                    <span className="fun">print</span>(<span className="fun">type</span>(<span className="var">n</span>)) <span className="comment">  # &lt;class 'int'&gt;</span> <br />
                                    <span className="fun">print</span>(<span className="fun">type</span>(<span className="var">pi</span>)) <span className="comment"> # &lt;class 'float'&gt;</span> <br />
                                </code>
                            </pre>

                            <h2 className='mt-5'>Rules for naming a variable</h2>
                            <p>
                                In Python, there are certain rules and guidelines that need to be followed while using variables. Here are some important ones:
                            </p>
                            <ul className='list-decimal ml-5'>
                                <li>
                                    Variable names must consist only of letters, numbers, and underscores. They can begin with a letter or an underscore, but not with a number. For instance, num_1 is a valid variable name, but 1_num is not.
                                </li>
                                <li>
                                    Spaces are not allowed in variable names. However, words in a variable name can be separated by underscores. This naming convention is known as snake_case, which means using all lowercase letters with words separated by underscores. Alternatively, camelCase can also be used, where the first letter of each word is capitalized and no underscores are used.
                                </li>
                                <li>
                                    Variable names should not be the same as Python keywords. For example, 'if', 'else', 'print', and others cannot be used as variable names.
                                </li>
                                <li>
                                    Variable names should be descriptive but concise. For example, num is a better variable name than n, and student_name is better than s_n.
                                </li>
                            </ul>

                            <p className='mt-5'>
                                In Python, it is essential to keep in mind that variable names are case-sensitive. Therefore, num, Num, nUm, and NUM are considered four different variables. A recommended practice in Python is to start variable names with a lowercase letter.
                            </p>
                            <p>
                                Moreover, instead of using underscores to separate words in variable names, Python also allows the use of camelCase. In this naming convention, the first letter of each word is capitalized, and no underscores are used. For example, variables could be named lookLikeThis instead of looking_like_this.
                            </p>

                            <h2>Variable names and Keywords</h2>
                            <p>
                                Keywords are specific words that have a particular meaning in Python. It is important to note that these keywords cannot be used as variable names.
                            </p>
                            <p>
                                For instance, if we declare a variable called "class," it would result in a <a href="/" className='text-blue-600'>syntax error</a> because "class" is a reserved keyword in Python. Therefore, it is important to choose appropriate variable names that do not conflict with Python's reserved keywords.
                            </p>
                            <pre className='py'>
                                <code>
                                    <span className="var">class</span><span className="operator"> = </span> <span className="string">'Advanced Python'</span> <br />
                                </code>
                            </pre>
                            <pre className='output leading-4'>
                                <code>
                                    Output: class = 'Advanced Python' <br />
                                    &nbsp;&nbsp;&nbsp;       ^<br />
                                    SyntaxError: invalid syntax
                                </code>
                            </pre>

                            <h2 className='mt-5'>Declaring Multiple Variables in a Single Line</h2>
                            <p>
                                In Python, it is possible to declare multiple variables in a single line using a comma-separated list. This approach can help save time and make the code more concise.
                            </p>
                            <p>
                                For instance, assigning values to multiple variables in one line can be done like this:
                            </p>
                            <pre className='py'>
                                <code>
                                    <span className="var">a</span>, <span className="var">b</span><span className="operator"> = </span><span className="num">10</span>, <span className="num">12</span> <br />
                                    <span className="fun">print</span>(<span className="string">'a: '</span>, <span className="var">a</span>) <br />
                                    <span className="fun">print</span>(<span className="string">'b: '</span>, <span className="var">b</span>) <br />
                                </code>
                            </pre>

                            <p>
                                In addition to assigning values to multiple variables in one line, Python also allows assigning different types of values to multiple variables at once.
                            </p>
                            <p>
                                For example, we can assign a string, an integer, and a floating-point value to different variables in one line like this:
                            </p>
                            <pre className='py'>
                                <code>
                                    <span className="var">name</span>, <span className="var">age</span>, <span className="var">marks</span><span className="operator"> = </span> <span className="string">"John Doe"</span>, <span className="num">20</span>, <span className="num">69.90</span>
                                </code>
                            </pre>
                            <p>
                                It is important to note that when declaring multiple variables in a single line in Python, the number of variables and values should be the same. If not, a ValueError will be raised.
                            </p>
                            <p>
                                For example, if we try to assign values to two variables but only provide one value, a ValueError will be raised.
                            </p>
                            <pre className='py'>
                                <code>
                                    <span className="var">a</span>, <span className="var">b</span><span className="operator"> = </span><span className="num">10</span> <br />
                                    <span className="fun">print</span>(<span className="string">'a: '</span>, <span className="var">a</span>) <br />
                                    <span className="fun">print</span>(<span className="string">'b: '</span>, <span className="var">b</span>) <br />
                                </code>
                            </pre>
                            <pre className='output'>
                                <code>
                                    a,b = 10 <br />
                                    ValueError: not enough to unpack (expected 2, got 1)
                                </code>
                            </pre>

                            <p>
                                Although it is possible to declare multiple variables in a single line in Python, it is not always recommended. In some cases, this approach can make the code less readable and harder to maintain. Therefore, it is advisable to use this feature sparingly and only when it enhances the clarity and conciseness of the code.
                            </p>
                            <p>
                                Alternatively, Python provides an unpacking feature that can be used to assign values to multiple variables. This approach can make the code more readable and easier to understand.
                            </p>
                            <pre className='py'>
                                <code>
                                    <span className="var">a</span>, <span className="var">b</span>, *<span className="var">c</span><span className="operator"> = </span>[<span className="num">1</span>,<span className="num">2</span>,<span className="num">3</span>,<span className="num">4</span>,<span className="num">5</span>] <br />
                                    <span className="fun">print</span>(<span className="var">a</span>)  <span className="comment"># 1</span> <br />
                                    <span className="fun">print</span>(<span className="var">b</span>)  <span className="comment"># 2</span> <br />
                                    <span className="fun">print</span>(<span className="var">a</span>)  <span className="comment"># [3,4,5]</span>
                                </code>
                            </pre>


                            <h2>Choosing mnemonic variable names</h2>
                            <p>
                                As long as the rules of variable naming are followed, and reserved words are avoided, there is a wide range of options for naming variables in Python. However, having too many options can be overwhelming when reading and writing code, especially for beginners.
                            </p>
                            <p>
                                For instance, consider the following two programs that achieve the same goal, but have different variable names. Although both programs work, they can be challenging to understand at first glance:
                            </p>

                            <pre className='py'>
                                <code>
                                    <span className="var">a</span><span className="var"> = </span> <span className="num">35.0</span> <br />
                                    <span className="var">b</span><span className="var"> = </span> <span className="num">12.50</span> <br />
                                    <span className="var">c</span><span className="operator"> = </span><span className="var">a</span> <span className="operator">*</span> <span className="var">b</span> <br />
                                    <span className="fun">print</span>(<span className="var">c</span>)
                                </code>
                            </pre>

                            <pre className='py mt-2'>
                                <code>
                                    <span className="var">hours</span><span className="var"> = </span> <span className="num">35.0</span> <br />
                                    <span className="var">rate</span><span className="var"> = </span> <span className="num">12.50</span> <br />
                                    <span className="var">pay</span><span className="operator"> = </span><span className="var">hours</span> <span className="operator">*</span> <span className="var">rate</span> <br />
                                    <span className="fun">print</span>(<span className="var">pay</span>)
                                </code>
                            </pre>

                            <p>
                                While the Python interpreter views both programs as identical, humans may perceive them differently. The second program is easier to comprehend because the variable names reflect their intended use and the data that will be stored in them. These well-thought-out variable names are called "mnemonic" variable names.
                            </p>
                            <p>
                                "Mnemonic" refers to something that aids memory. In programming, we use mnemonic variable names to assist in recalling the purpose of the variable. They help us remember why we created a variable and its intended use, making the code easier to understand and maintain.
                            </p>






                        </div>
                        <div >
                            <a href="/" className='fixed top-1/2 left-[13rem] hidden xl:block'>
                                <BsChevronLeft size={25} />
                            </a>
                            <a href="/docs/python/data-types" title='Data Types' className='fixed top-1/2 right-[13rem] hidden xl:block'>
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