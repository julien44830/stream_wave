import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import MusicStyleSelect from './components/MusicStytleSelect.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MusicStyleSelect />,
        loader : () => fetch('https://de1.api.radio-browser.info/json/stations/bycountryexact/France?limit=1000')
      }
      // {
      //   path: "/about",
      //   element: A COMPLETER A LA CREATION DE ABOUT
      // }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
