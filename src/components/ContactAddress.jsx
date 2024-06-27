import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
function ContactAddress() {
  
  return (
    <>
     <div className='container p-5 '>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12 '>
          <div className='card' style={{border:'0',boxShadow:'0px 0px 20px rgba(0, 0, 0, 0.2), 0px 0px 30px rgba(0, 0, 0, 0.14), 0px 0px 40px rgba(0, 0, 0, 0.12)'}}>
            <div>
            <h1 className='px-3'>Quick Contact</h1>
            <div className='card-body d-flex gap-3'>
              <div className='d-flex justify-content-center align-items-center' style={{height:'50px',width:'50px',borderRadius:'50px',backgroundColor:'#1D3CE2'}}>
                {<FaPhoneAlt className='fs-3 text-light'/>}
              </div>
              <p>Main Office: <br/>
                  (+91)6376228917, +916389562356
              </p>
            </div>
            </div>
            
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 '>
          <div className='card' style={{border:'0',boxShadow:'0px 0px 20px rgba(0, 0, 0, 0.2), 0px 0px 30px rgba(0, 0, 0, 0.14), 0px 0px 40px rgba(0, 0, 0, 0.12)'}}>
            <h1 className='px-3'>Email Address</h1>
            <div className='card-body d-flex gap-3'>
              <div className='d-flex justify-content-center align-items-center' style={{height:'50px',width:'50px',borderRadius:'50px',backgroundColor:'#1D3CE2'}}>
                {<IoIosMailUnread className='fs-3 text-light'/>}
              </div>
              <p>Mail:<br/>
                   healthcare@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 '>
          <div className='card' style={{border:'0',boxShadow:'0px 0px 20px rgba(0, 0, 0, 0.2), 0px 0px 30px rgba(0, 0, 0, 0.14), 0px 0px 40px rgba(0, 0, 0, 0.12)'}}>
            <h1 className='px-3'>Location</h1>
            <div className=' card-body d-flex gap-3'>
              <div className='d-flex justify-content-center align-items-center' style={{height:'50px',width:'50px',borderRadius:'50px',backgroundColor:'#1D3CE2'}}>
                {<CiLocationOn className='fs-3 text-light'/>}
              </div>
              <p>47 Stayam Street, Jaipur,<br/> Rajasthan, 303602</p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default ContactAddress