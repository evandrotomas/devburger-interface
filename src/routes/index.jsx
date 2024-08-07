/* eslint-disable prettier/prettier */
import { createBrowserRouter, redirect } from 'react-router-dom'

import { Header } from '../components'
import { paths } from '../constants/paths'
import { Cart, Home, Login, Products, Register, Admin } from '../containers'

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
      return await fetch('/')
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
      return await fetch('/')
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

  {
    path: paths.Order,
    element: (
      <>
        <Admin match={paths.Order} />
      </>
    ),
    loader: async () => {
      const user = localStorage.getItem('hamburgueria:use_data')
      if (!user) return redirect('/login')
      return await fetch('/')
    },
  },
  {
    path: paths.Products,
    element: (
      <>
        <Admin match={paths.Products} />
      </>
    ),
    loader: async () => {
      const user = localStorage.getItem('hamburgueria:use_data')
      if (!user) return redirect('/login')
      return await fetch('/')
    },
  },
  {
    path: paths.NewProduct,
    element: (
      <>
        <Admin match={paths.NewProduct} />
      </>
    ),
    loader: async () => {
      const user = localStorage.getItem('hamburgueria:use_data')
      if (!user) return redirect('/login')
      return await fetch('/')
    },
  },
  {
    path: paths.EditProduct,
    element: (
      <>
        <Admin match={paths.EditProduct} />
      </>
    ),
    loader: async () => {
      const user = localStorage.getItem('hamburgueria:use_data')
      if (!user) return redirect('/login')
      return await fetch('/')
    },
  },
])
