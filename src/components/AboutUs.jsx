import React from 'react'
import Header from './Header'
import DoctorImg from './doctorImg'
import Footer from './Footer'
import HomeSection1 from './HomeSection1'
import Process from './Process'

function AboutUs({aboutdetail}) {
  return (
    <>
     <Header/>
     <DoctorImg send = {aboutdetail}/>
     <HomeSection1/>
     <Process/>
     <Footer/>
    </>
  )
}

export default AboutUs