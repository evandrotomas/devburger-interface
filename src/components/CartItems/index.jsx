/* eslint-disable prettier/prettier */

import { use_cart } from '../../hooks/CartContext'
import { format_currency } from '../../utils/formatCurrency'
import { Container, Header, Body, Empty_cart } from './styles'

export function Cart_items() {
  const {
    cart_products,
    increase_products,
    decrease_products,
    delete_products,
  } = use_cart()

  return (
    <Container>
      <Header>
        <p></p>
        <p style={{ marginLeft: 30 }}>Itens</p>
        <p style={{ marginLeft: 15 }}>Preço</p>
        <p>Quantidade</p>
        <p style={{ marginLeft: 25 }}>Total</p>
        <p></p>
      </Header>

      {cart_products && cart_products.length > 0 ? (
        cart_products.map((product) => (
          <Body key={product.id}>
            <img src={product.url} alt="" />
            <p>{product.name}</p>
            <p>{format_currency(product.price)}</p>

            <div className="quantity-container">
              <button onClick={() => decrease_products(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increase_products(product.id)}>+</button>
            </div>

            <p>{format_currency(product.quantity * product.price)}</p>
            <button
              className="trash"
              onClick={() => delete_products(product.id)}
            >
              🗑️
            </button>
          </Body>
        ))
      ) : (
        <Empty_cart>Carrinho vazio</Empty_cart>
      )}
    </Container>
  )
}
