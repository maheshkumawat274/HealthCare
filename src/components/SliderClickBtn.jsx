import React from 'react'
import '../components/CSS/clickbtn.css'
import { FaArrowRight } from "react-icons/fa";
function SliderClickBtn() {
  return (
    <div className='container d-flex justify-content-center gap-3 p-5'>
          <div className='doctor-btn fs-4 d-flex justify-content-center align-items-center'>1</div>
          <div className='doctor-btn fs-4 d-flex justify-content-center align-items-center'>2</div>
          <div className='doctor-btn fs-4 d-flex justify-content-center align-items-center'>3</div>
          <div className='doctor-btn fs-4 d-flex justify-content-center align-items-center'>{<FaArrowRight/>}</div>
        </div>
  )
}

export default SliderClickBtn