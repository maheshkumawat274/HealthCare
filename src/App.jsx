import React from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import DoctorPage from './pages/DoctorPage'
import ContactPage from './pages/ContactPage'
import RegistrationPage from './pages/RegistrationPage'
function App() {
  const aboutPage = [
    {
      title:'About us',
      pageName:'About us',

    }
  ]
  const contactPage = [
    {
      title:'Contact us',
      pageName:'Contact us',

    }
  ]
  const doctorPage = [
    {
      title:'Team',
      pageName:'Team',

    }
  ]
  const servicePage = [
    {
      title:'Our Services',
      pageName:'Our Services',

    }
  ]
  const registerPage = [
    {
      title:'Registration Page',
      pageName:'Registration Page',

    }
  ]
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/aboutus' element={<AboutPage about={aboutPage} />}></Route>
        <Route path='/services' element={<ServicePage service={servicePage} />}></Route>
        <Route path='/teams' element={<DoctorPage doctor={doctorPage} />}></Route>
        <Route path='/contact' element={<ContactPage contact={contactPage} />}></Route>
        <Route path='/register' element={<RegistrationPage register = {registerPage} />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App