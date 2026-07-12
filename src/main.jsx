import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import './index.css'
import App from './App.jsx'

// Replace with YOUR OWN Google Analytics 4 Measurement ID.
// Get it from: analytics.google.com → Admin → Data Streams → your web stream → "Measurement ID" (starts with G-)
ReactGA.initialize('G-XXXXXXXXXX')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)