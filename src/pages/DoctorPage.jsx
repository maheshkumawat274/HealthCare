import React from 'react'
import Teams from '../components/Teams'

function DoctorPage({doctor}) {
  return (
    <div><Teams doctordetail = {doctor}/></div>
  )
}

export default DoctorPage