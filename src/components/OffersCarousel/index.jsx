/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import Offers from '../../assets/OFERTAS.png'
import { use_cart } from '../../hooks/CartContext'
import { api } from '../../services/api'
import { format_currency } from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container, Category_img, ContainerItems, Image } from './styles'

export function Offers_carousel() {
  const [offers, set_offers] = useState([])
  const { put_product_in_cart } = use_cart()
  const to = useNavigate()

  useEffect(() => {
    async function load_offers() {
      const { data } = await api.get('products')

      const only_offers = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, format_price: format_currency(product.price) }
        })

      set_offers(only_offers)
    }

    load_offers()
  }, [])

  const break_points = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ]

  return (
    <Container>
      <Category_img src={Offers} alt="logo-product" />
      <Carousel
        itemsToShow={4}
        style={{ width: '98%' }}
        breakPoints={break_points}
      >
        {offers &&
          offers.map((product) => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="product-img" />
              <p>{product.name}</p>
              <p>{product.format_price}</p>
              <Button
                onClick={() => {
                  put_product_in_cart(product)
                  to('/carrinho')
                }}
              >
                Peça agora
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
