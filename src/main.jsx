import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext' // Importar el CartProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* Envolver la aplicación con CartProvider */}
      <App />
    </CartProvider>
  </StrictMode>,
)