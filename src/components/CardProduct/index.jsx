/* eslint-disable prettier/prettier */

import PropTypes from 'prop-types'

import { use_cart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardProduct({ product }) {
  const { put_product_in_cart } = use_cart()
  return (
    <Container>
      <Image src={product.url} alt="productimage" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.format_price}</ProductPrice>
        <Button onClick={() => put_product_in_cart(product)}>Adicionar</Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object,
}
