import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <HelmetProvider>
  <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
  </HelmetProvider>
 </AuthProvider>
  </React.StrictMode>,
)
