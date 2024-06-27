import React from 'react'
import '../components/CSS/card.css'
function Card({img,title,text}) {
  return (
    <>
      <div className='card text-center' style={{width:'75%',border:'0'}}>
       <div className='card-img'>
        <img className='img-fluid' src={img}></img>
       </div>
       <div className='card-body' style={{backgroundColor:'#EEEEEE'}}>
        <h1 className='card-text fs-3'>{title}</h1>
        <p className='card-text'>{text}</p>
       </div>
      </div>
    </>
  )
}

export default Card