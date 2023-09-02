import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'






const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    Children:[
     
      {
        path:'/',
        element: <Home></Home>
      },
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)