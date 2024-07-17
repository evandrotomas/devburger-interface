/* eslint-disable prettier/prettier */

import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import Product_logo1 from '../../assets/logo-removebg-preview.png'
import { CardProduct } from '../../components'
import { api } from '../../services/api'
import { format_currency } from '../../utils/formatCurrency'
import {
  Container,
  Products_img,
  Div,
  Category_button,
  Menu,
  ProductsContainer,
} from './styles'

export function Products({ location: state }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, set_categories] = useState([])
  const [active_category, set_active_category] = useState(categoryId)
  const [products, set_products] = useState([])
  const [filtered_products, set_filtered_products] = useState([])

  useEffect(() => {
    async function load_categories() {
      const { data } = await api.get('categories')

      const new_categories = [{ id: 0, name: 'Todas' }, ...data]

      set_categories(new_categories)
    }

    async function load_products() {
      const { data: all_products } = await api.get('products')

      const new_products = all_products.map((product) => {
        return { ...product, format_price: format_currency(product.price) }
      })

      set_products(new_products)
    }
    load_products()
    load_categories()
  }, [])

  useEffect(() => {
    if (active_category === 0) {
      set_filtered_products(products)
    } else {
      const new_filtered_products = products.filter(
        (product) => product.category_id === active_category,
      )

      set_filtered_products(new_filtered_products)
    }
  }, [active_category, products])

  return (
    <Container>
      <Div>
        <Products_img src={Product_logo1} alt="logo-product" />
      </Div>
      <Menu>
        {categories &&
          categories.map((category) => (
            <Category_button
              type="button"
              key={category.id}
              isActiveCategory={active_category === category.id}
              onClick={() => {
                set_active_category(category.id)
              }}
            >
              {category.name}
            </Category_button>
          ))}
      </Menu>
      <ProductsContainer>
        {filtered_products &&
          filtered_products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object,
}
