import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../components/CSS/register.css'
import DoctorImg from './doctorImg'
function Registration({registerData}) {
  return (
    <>
    <Header/>
    <DoctorImg send={registerData}/>
     <div className='container min-vh-100 w-100'>
      <div className='row min-vh-100'>
        <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center p-5'>
          <div className='w-100 registerform'>
            <h1 className='pb-5'>Sign in</h1>
            <input type='text' placeholder='Enter Your FullName' className='form-control'></input><br/>
            <div className='d-flex gap-3'>
              <input type='date' placeholder='dd/mm/yyyy' className='form-control'></input>
              <select className='form-control'>
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Women">Women</option>
                <option value="Other">Other</option>
              </select>
            </div><br/>
            <input type='email' placeholder='Enter Your Email Address' className='form-control'></input><br/>
            <input type='number' placeholder='Enter Mobile Number' className='form-control'></input><br/>
            <input type='password' placeholder='Enter Password' className='form-control'></input><br/>
            <button className='btn btn-danger w-50'>Register</button>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center p-5'>
          <video class="embed-responsive-item video min-vh-50" controls autoPlay loop>
            <source src="./imgs/health.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
     </div>
     <Footer/>
    </>
  )
}

export default Registration