import React from 'react'
import '../components/CSS/contact.css'
import Header from './Header'
import DoctorImg from './doctorImg'
import Footer from './Footer'
import ContactAddress from './ContactAddress'

function Contact({contactdetail}) {
  return (
    <>
      <Header/>
      <DoctorImg send = {contactdetail} />
      <div className='container pt-5 pb-5'>
        <div className='row'>
          <h1>GET IN TOUCH</h1>
          <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center'>
            <div className='container-fluid'>
              <div className='d-flex gap-3'>
                <input type='text' placeholder='Enter Your Name' className='form-control'></input>
                <input type='text' placeholder='Phone Number' className='form-control'></input>
              </div>
              <div className='pt-4'>
                <input type='email' placeholder='Email' className='form-control'></input> <br/>
                <textarea className='form-control p-5' placeholder='Message'></textarea><br/>
                <button className='btn btn-danger'>Send Message</button>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='d-flex justify-content-center align-items-center h-100 w-100'>
              <img className='h-75 w-75' src='./imgs/contact.png'></img>
            </div>
          </div>
        </div>
      </div>
      <ContactAddress/>
      <Footer/>
    </>
  )
}

export default Contact