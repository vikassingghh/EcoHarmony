import React from 'react'
import Hero from '../Components/Hero/Hero'
import Resources from '../Components/Resources/Resources'
import Service from '../Components/Service/Service'
import Learner from '../Components/Learner/Learner'
import Contact from '../Components/Contact/Contact'

const Home = () => {
  return (
    <>
        <Hero/>
        <Resources/>
        <Service/> 
        <Learner/>
        <Contact/>
    </>
  )
}

export default Home
