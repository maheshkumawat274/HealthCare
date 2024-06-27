import React from 'react'
import '../components/CSS/process.css'
import Card from './Card'
function Process() {
  const item =[
    {
      img:'./imgs/process-1.jpg',
      title:'Get Appointment',
      text:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
    },
    {
      img:'./imgs/process-2.jpg',
      title:'Start Check-Up',
      text:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.',
    },
      
    {
      img:'./imgs/process-3.jpg',
      title:'Enjoy Healthy Life',
      text:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
    }
  ]
  return (
    <>
      <div className='container-fluid p-5' style={{backgroundColor:'#EEEEEE'}}>
        <h1 className='text-center'>How It Helps You To <br/> Keep Healthy </h1>
        <div className='container pt-5'>
          <div className='row' style={{backgroundColor:'#EEEEEE'}}>
            {item.map((item,i)=><div className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center' >
            <Card 
                img= {item.img}
                title={item.title}
                text={item.text}
                />
            </div>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Process