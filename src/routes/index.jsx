/* eslint-disable prettier/prettier */
import { createBrowserRouter, redirect } from 'react-router-dom'

import { Header } from '../components'
import { Cart, Home, Login, Products, Register } from '../containers'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    index: true,
    element: <Home />,
    loader: async () => {
      const user = localStorage.getItem('hamburgueria:use_data')

      if (!user) return redirect('/login')

      return await await fetch('/')
    },
  },
  {
    path: '/produtos',
    element: (
      <>
        <Header />
        <Products />
      </>
    ),
    loader: async () => {
      const user = localStorage.getItem('hamburgueria:use_data')

      if (!user) return redirect('/login')

      return await await fetch('/')
    },
  },
  {
    path: '/carrinho',
    element: (
      <>
        <Header />
        <Cart />
      </>
    ),
    loader: async () => {
      const user = localStorage.getItem('hamburgueria:use_data')

      if (!user) return redirect('/login')

      return await fetch('/')
    },
  },
])
