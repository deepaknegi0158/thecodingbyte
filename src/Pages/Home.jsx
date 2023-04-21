import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Lang from '../Components/Lang'
import Navbar from '../Components/Navbar'


const Home = () => {
  return (
    <>
      <Helmet>
        <title>The Coding Byte</title>
      </Helmet>

      <Navbar />
      <Hero />
      <Lang />


    </>
    
  )
}

export default Home