import React from 'react'
import Header from './Header'
import DoctorImg from './doctorImg'
import Footer from './Footer'
import ServicesContent from './ServicesContent'

function Services({servicedetail}) {
  return (
    <>
     <Header/>
     <DoctorImg send = {servicedetail}/>
     <ServicesContent/>
     <Footer/>
    </>
  )
}

export default Services