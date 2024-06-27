import React from 'react'
import '../components/CSS/appointment.css'
import { Link } from 'react-router-dom'
function Appointment() {
  return (
    <>
      <div className='Do-Appointment'>
          <img className='img-fluid w-100 h-100' src='./imgs/doctors.webp' alt='Doctors'></img>
          <div className='Appointment-text w-100 h-100 d-flex justify-content-between '>
            <div className='d-flex align-items-center'>
              <div>
                <div>
                  <h1 className='px-5 text-light'>Online Consultations With <br/>Qualified Doctors</h1>
                </div>
                <button className='btn btn-primary px-5 mx-5 fw-bold'><Link to={'/contact'} style={{color:'white',textDecoration:'none'}}>Make an Appointment</Link></button>
              </div>
            </div>
            <div className='px-5 d-flex justify-content-center align-items-center'>
              <img className='img-fluid' src='./imgs/vdicon.png'></img>
              <img className='img-fluid w-100 h-75' src='./imgs/appoint.png'></img>
            </div>
          </div>
      </div>
    </>
  )
}

export default Appointment
