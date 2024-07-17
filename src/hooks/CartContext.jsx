/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const Cart_provider = ({ children }) => {
  const [cart_products, set_cart_products] = useState([])

  const update_local_storage = async (products) => {
    await localStorage.setItem(
      'hamburgueria:cart_info',
      JSON.stringify(products),
    )
  }

  const put_product_in_cart = async (product) => {
    const cart_index = cart_products.findIndex((prd) => prd.id === product.id)

    let new_cart_products = []
    if (cart_index >= 0) {
      new_cart_products = cart_products

      new_cart_products[cart_index].quantity =
        new_cart_products[cart_index].quantity + 1

      set_cart_products(new_cart_products)
    } else {
      product.quantity = 1
      new_cart_products = [...cart_products, product]
      set_cart_products(new_cart_products)
    }

    await update_local_storage(new_cart_products)
  }

  const delete_products = async (product_id) => {
    const new_cart = cart_products.filter((product) => product.id != product_id)

    set_cart_products(new_cart)

    await update_local_storage(new_cart)
  }

  const increase_products = async (product_id) => {
    const new_cart = cart_products.map((product) => {
      return product.id === product_id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    set_cart_products(new_cart)

    await update_local_storage(new_cart)
  }

  const decrease_products = async (product_id) => {
    const cart_index = cart_products.findIndex((pd) => pd.id === product_id)

    if (cart_products[cart_index].quantity > 1) {
      const new_cart = cart_products.map((product) => {
        return product.id === product_id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      set_cart_products(new_cart)

      await update_local_storage(new_cart)
    } else {
      delete_products(product_id)
    }
  }

  useEffect(() => {
    const load_user_data = async () => {
      const client_cart_data = await localStorage.getItem(
        'hamburgueria:cart_info',
      )

      if (client_cart_data) {
        set_cart_products(JSON.parse(client_cart_data))
      }
    }
    load_user_data()
  }, [])

  return (
    <CartContext.Provider
      value={{
        put_product_in_cart,
        cart_products,
        increase_products,
        decrease_products,
        delete_products,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const use_cart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('use_cart must be used with UserContext')
  }

  return context
}

Cart_provider.protoTypes = {
  children: PropTypes.node,
}
