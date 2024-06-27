import React from 'react'
import DoctorCard from './DoctorCard'
import '../components/CSS/do-container.css'

import SliderClickBtn from './SliderClickBtn';
function Doctors() {
  const items = [
    {
      image:'./imgs/d1.jpg',
      name:"Black Marvin",
      position:'Medical Assistant'
    },
    {
      image:'./imgs/d2.jpg',
      name:"Arlene Maccy",
      position:'Senior Doctor'
    },
    {
      image:'./imgs/d3.jpg',
      name:"Eleanor Pena",
      position:'Nursing Assistant'
    },
    {
      image:'./imgs/d4.png',
      name:"Jenny Wilson",
      position:'Doctor'
    },
    {
      image:'./imgs/d5.png',
      name:"Guy Hawkins",
      position:'Cardiologist'
    },
    {
      image:'./imgs/d6.png',
      name:"Jerome Bell",
      position:'Ophthalmologist'
    },
    {
      image:'./imgs/d7.png',
      name:"Courtney Henry",
      position:'Pathologist'
    },
    {
      image:'./imgs/d8.png',
      name:"Ralph Edwards",
      position:'Cardiologist'
    },
  ]
  return (
    <>
     <div className='container-fluid p-5' style={{backgroundColor:'#EEEEEE'}}>
       <div className='container'>
        <div className='do-container'>
          <div className='row'>
            {items.map((item,i)=><div key={i} className='col-lg-3 col-md-4 col-sm-12 p-2'>
              <DoctorCard 
              img = {item.image}
              name = {item.name}
              position={item.position}
              colSize = 'col-lg-4 col-md-6 col-sm-12'
              />
            </div>)}
          </div>
          <div className='row'>
            {items.map((item,i)=><div key={i} className='col-lg-3 col-md-4 col-sm-12 p-2'>
              <DoctorCard 
              img = {item.image}
              name = {item.name}
              position={item.position}
              colSize = 'col-lg-4 col-md-6 col-sm-12'
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

export default Doctors