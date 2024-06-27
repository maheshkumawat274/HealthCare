import React from 'react'
import Header from './Header'
import DoctorImg from './doctorImg'
import Doctors from './Doctors'
import Footer from './Footer'
function Teams({doctordetail}) {
  return (
    <>
     <Header/>
     <DoctorImg send ={doctordetail}/>
     <Doctors/>
     <Footer/>
    </>
  )
}

export default Teams