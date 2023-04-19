import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import MainLayout from './components/Layout/MainLayout'
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import cartDataLoader from './loaders/cartDataLoader'
import Register from './components/Register/Register'
import AuthProvider from './providers/AuthProvider'
import Checkout from './components/Checkout/Checkout'
import PrivateRoutes from './routes/PrivateRoutes'
const router=createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'orders',
        element:<Orders></Orders>,
        loader:cartDataLoader
      },
      {
        path:'checkout',
        element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>
      },
      {
        path:'inventory',
        element:<PrivateRoutes><Inventory></Inventory></PrivateRoutes>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
