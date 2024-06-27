import React, { useEffect, useState} from 'react'
import '../components/CSS/header.css'
import { CiAlarmOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import {useNavigate,Link} from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import Logo from './Logo';
import Media from './Media';
function Header() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navigate = useNavigate()

  return (
    <>
     <div className='container-fluid px-0'>
       <div className='container-fluid d-flex justify-content-between align-items-center p-1 px-5 header1' style={{backgroundColor:'#262626'}}>
            <Logo/>
            <div className='header1-btn'>
              <button className='btn btn-danger px-5 fw-bold'><Link to={'/contact'} style={{color:'white',textDecoration:'none'}}>Make an Appointment</Link></button>
            </div>
       </div>
       <div className='container-fluid header2  pt-2 text-light' style={{backgroundColor:'#0E1135'}}>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center'>
              <p>{<CiAlarmOn/>} Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00</p>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center'>
              <p>{<FaPhoneAlt/>} Number: 0198-9526503</p>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center'>
              <p>{<IoLocation/>} 47 Stayam Street, Jaipur, Rajasthan</p>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center pt-2'>
              <Media/>
            </div>
          </div>
        </div>
        <div className={`container-fluid w-100 header3 ${scrollPosition > 20 ? 'slide-down' : 'slide-up'}`} >
          <div className='container bg-light d-flex justify-content-around align-items-center p-2' style={{borderRadius:'70px'}}>
            <Logo/>
            <div className='navitems'>
              <ul className='fs-4 list-unstyled d-flex justify-content-around align-items-center pt-2 gap-5'>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/'>Home</Link></li>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/aboutus'>About us</Link></li>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/services'>Services</Link></li>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/teams'>Doctors</Link></li>
                <li><Link style={{textDecoration:'none', color:'black'}} to='/contact'>Contact</Link></li>
              </ul>
            </div>
          <div className='header2-btn'>
            <button className='btn btn-primary px-5 fw-bold'><Link style={{textDecoration:'none', color:'white'}} to='/register'>Login</Link></button>
          </div>
        </div>
        </div>
     </div>
    </>
  )
}

export default Header