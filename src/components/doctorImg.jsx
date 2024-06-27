import React from 'react';
import '../components/CSS/doctorImg.css';
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';
function DoctorImg({send}) {
  console.log(send[0].pageName)
  return (
    <>
        <div className='Do-Img'>
          <img className='img-fluid w-100 h-100' src='./imgs/doctors.webp' alt='Doctors'></img>
          <div className='img-text'>
          <h1>{send[0].title}</h1>
          <h2><span><Link style={{textDecoration:'none'}} to='/'>Home</Link></span> {<MdArrowForwardIos/>} {send[0].pageName}</h2>
          </div>
        </div>
    </>
  );
}

export default DoctorImg;
