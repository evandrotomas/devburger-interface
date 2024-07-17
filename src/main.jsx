import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Global_styles from '../src/styles/globalStyles'
import { App_provider } from './hooks'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App_provider>
      <RouterProvider router={router} />
    </App_provider>
    <Global_styles />
    <ToastContainer autoClose={2000} theme="dark" />
  </React.StrictMode>,
)

export default Global_styles
