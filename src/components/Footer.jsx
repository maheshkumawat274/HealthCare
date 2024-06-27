import React from 'react'
import Logo from './Logo'
import Media from './Media'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
function Footer() {
  return (
    <>
     <div className='container-fluid p-5 text-light' style={{backgroundColor:'#0F1237'}}>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <ul className='list-unstyled'>
              <li><Logo/></li>
              <li className='pt-3'>Lorem ipsum dolor sit amet constetur adipiscing elit. Etiam eu turpis mostie dictum est a, mattis tellus.</li>
              <li className='pt-4'><Media/></li>
            </ul>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <ul className='list-unstyled'>
              <li className='fs-3'>Quick Link</li>
              <li className='pt-3'>Home</li>
              <li className='pt-2'>About Us</li>
              <li className='pt-2'>Services</li>
              <li className='pt-2'>Elements</li>
              <li className='pt-2'>Contacts Us</li>
            </ul>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <ul className='list-unstyled'>
              <li className='fs-3'>Useful Links</li>
              <li className='pt-3'>Privacy Policy</li>
              <li className='pt-2'>Terms & Condition</li>
              <li className='pt-2'>Support</li>
              <li className='pt-2'>Disclaimer</li>
              <li className='pt-2'>Faq</li>
            </ul>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <ul className='list-unstyled'>
              <li className='fs-3'>Contact us</li>
              <li className='pt-3'>{<IoLocation/>} 47 Stayam Street, Jaipur, Rajasthan</li>
              <li className='pt-2'>{<FaPhoneAlt/>} 0198-9526503</li>
              <li className='pt-2'>{<CiMail/>} Email: example@gmail.com</li>
            </ul>
          </div>
        </div>
       </div>
     </div>
    </>
  )
}

export default Footer