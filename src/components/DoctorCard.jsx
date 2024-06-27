import React from 'react'
import '../components/CSS/doctorCard.css'
function DoctorCard({img,name,position}) {
  return (
    <>
     <div className='container-fluid'>
      <div className='card' style={{border:'10px solid white'}}>
        <div className='doctor-img'>
          <img className='img-fluid h-100 w-100' src={img}></img>
        </div>
        <div className='card-body text-center'>
          <h1 className='fs-3'>{name}</h1>
          <p>{position}</p>
        </div>
      </div>
     </div>
    </>
  )
}

export default DoctorCard