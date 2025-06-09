import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './Components/Header/Header.jsx'
import { FullSections } from './Sections/FullSections/FullSections.jsx'


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    
    <FullSections></FullSections>
    
  </StrictMode>,
)
