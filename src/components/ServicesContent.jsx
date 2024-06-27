import React from 'react'
import DoctorCard from './DoctorCard'
import SliderClickBtn from './SliderClickBtn'

function ServicesContent() {
  const items = [
    {
      image:'./imgs/service-1.jpg',
      name:"Cardiology",
      position:'Amet minim mollit non deserunt ullamco aliqua dolor do amet sint.'
    },
    {
      image:'./imgs/service-2.jpg',
      name:"Modern Laboratory",
      position:'Amet minim mollit non deserunt ullamco aliqua dolor do amet sint.'
    },
    {
      image:'./imgs/service-3.jpg',
      name:"Dental Clinic",
      position:'Amet minim mollit non deserunt ullamco aliqua dolor do amet sint.'
    },
    {
      image:'./imgs/service-1.jpg',
      name:"Neurosurgery",
      position:'Amet minim mollit non deserunt ullamco aliqua dolor do amet sint.'
    },
    {
      image:'./imgs/service-2.jpg',
      name:"Pediatrics",
      position:'Amet minim mollit non deserunt ullamco aliqua dolor do amet sint.'
    },
    {
      image:'./imgs/service-3.jpg',
      name:"Experienced Doctors",
      position:'Amet minim mollit non deserunt ullamco aliqua dolor do amet sint.'
    },
    
  ]
  return (
    <>
     <div className='container-fluid p-5' style={{backgroundColor:'#EEEEEE'}}>
       <div className='container'>
        <div className='service-container'>
          <div className='row flex-nowrap' style={{overflowX:'auto'}}>
            {items.map((item,i)=><div key={i} className='col-lg-4 col-md-6 col-sm-12'>
              <DoctorCard
               name={item.name}
               img={item.image}
               position={item.position}
              />
            </div>)}
          </div>
        </div>
        <SliderClickBtn/>
       </div>
     </div>
    </>
  )
}

export default ServicesContent