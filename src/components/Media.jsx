import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
function Media() {
  return (
    <>
     <div className='d-flex gap-3'>
              {<FaInstagram/>}
              {<CiTwitter/>}
              {<RiFacebookCircleFill/>}
              {<FaLinkedinIn/>}
     </div>
    </>
  )
}

export default Media