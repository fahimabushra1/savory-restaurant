import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './providers/AuthProvider'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <HelmetProvider>
  <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    <ToastContainer />
  </HelmetProvider>
 </AuthProvider>
  </React.StrictMode>,
)
