import React from 'react'
import '../components/CSS/home.css'
import Header from './Header'
import HomeSection1 from './HomeSection1'
import Process from './Process'
import Footer from './Footer'
import Doctors from './Doctors'
import ServicesContent from './ServicesContent'
import Appointment from './Appointment'
function Home() {
  const healthtext ={
    textDecoration:'underline',
    color:'#F9313B'
  }
  return (
    <>
    <Header/>
      <div className='container-fluid home-content min-vh-100'>
        <div className='row' style={{paddingTop:'12%'}}>
          <div className='col-lg-6 col-md-6 col-sm-6 text-light d-flex justify-content-center' style={{paddingTop:'10%'}}>
            <div>
              <p className='fs-3'>Highest level of service you can find</p>
              <h1 className='fs-1 fw-bold'>Take <span style={healthtext}>Care of Your</span><br/> Health Now.</h1><hr/>
              <div className=''>
                <input type='text' placeholder='Search' className='form-control'></input>
              </div><br/>
              <div className='homebtn d-flex gap-2'>
                <button className='btn btn-danger px-5'>Find Doctor</button>
                <button className='btn btn-danger px-5'>Book Appointment</button>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <div className='home-banner-img'>
              <img className='img-fluid' src='./imgs/banner-img-1.png'></img>
            </div>
          </div>
        </div>
      </div>
      <HomeSection1/>
      <Process/>
      <div className='container-fluid p-5'>
        <p className='text-center fs-4 text-primary'>Our Team</p>
        <h1 className='text-center fw-bold'>Meet Our Experienced Doctors <br/> For The Best Treatment</h1>
      </div>
     
      <Doctors/>
      <Appointment/>
      <div className='container-fluid p-5'>
        <p className='text-center fs-4 text-primary'>Our Services</p>
        <h1 className='text-center fw-bold'>We Offer For You Medical &<br/> Saving Lives</h1>
      </div>
      <ServicesContent/>
      <Footer/>
    </>
  )
}

export default Home