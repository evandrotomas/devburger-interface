/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { use_cart } from '../../hooks/CartContext'
import { api } from '../../services/api'
import { format_currency } from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export function Cart_resume() {
  const [final_price, set_final_price] = useState(0)
  const [delivery_tax] = useState(5)

  const { cart_products } = use_cart()

  useEffect(() => {
    const sum_all_items = cart_products.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    set_final_price(sum_all_items)
  }, [cart_products])

  const submit_order = async () => {
    const order = cart_products.map((product) => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando o seu pedido...',
      success: 'Pedido realizado com sucesso!',
      error: 'Falha ao tentar realizar seu pedido, por favor tente novamente',
    })
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{format_currency(final_price)}</p>
          <p className="tax">Taxa de entrega</p>
          <p className="tax-price">{format_currency(delivery_tax)}</p>
          <p></p>
        </div>

        <div className="container-bottom">
          <p className="total">Total</p>
          <p className="total-price">
            {format_currency(final_price + delivery_tax)}
          </p>
        </div>
      </Container>
      <Button
        style={{ width: '100%', marginTop: '30px' }}
        onClick={submit_order}
      >
        Finalizar pedido
      </Button>
    </div>
  )
}
