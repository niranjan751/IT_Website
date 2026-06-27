import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home/home'
import Enterprise from './Components/Enterprise/EnterPrise'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Enterprise />
  </StrictMode>,
)
