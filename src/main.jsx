import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthContext'
import Home from './Home/home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Home />
    </AuthProvider>
  </StrictMode>,
)
