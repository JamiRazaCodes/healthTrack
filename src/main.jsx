import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartcontextProvider from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CartcontextProvider>
   <App />      
   </CartcontextProvider>
  </StrictMode>,
)
