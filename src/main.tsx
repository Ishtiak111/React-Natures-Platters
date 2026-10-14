import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Navbar from './components/Navbar'
// import Banner from './components/Banner'
// import Services from './components/Services'
// import PopularProducts from './components/PopularProducts'
// import type { IPopularProduct } from './types'
import App from './App'
import { ToastContainer } from 'react-toastify'





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ToastContainer />
  </StrictMode>,
)
