import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import FeaturePage from './routes/Features/FeaturePage.jsx'
import VaccinePage from './routes/Vaccines/VaccinePage.jsx'
import DoctorPage from './routes/Doctors/DoctorPage.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 <Router>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/feature' element={<FeaturePage />}/>
    <Route path='/vaccine' element={<VaccinePage />}/>
    <Route path='/doctor' element={<DoctorPage />}/>
  </Routes>
 </Router>
)
