import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import FeaturePage from './routes/Features/FeaturePage.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 <Router>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/feature' element={<FeaturePage />}/>
  </Routes>
 </Router>
)
