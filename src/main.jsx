import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// Font Awesome
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
