/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/CATEGORIAS.png'
import { api } from '../../services/api'
import {
  Container,
  Category_img,
  ContainerItems,
  Image,
  Button,
} from './styles'

export function Category_carousel() {
  const [categories, set_categories] = useState([])

  useEffect(() => {
    async function load_categories() {
      const { data } = await api.get('categories')
      set_categories(data)
    }

    load_categories()
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
      <Category_img src={Category} alt="logo-category" />
      <Carousel
        itemsToShow={4}
        style={{ width: '98%' }}
        breakPoints={break_points}
      >
        {categories &&
          categories.map((category) => (
            <ContainerItems key={category.id}>
              <Image src={category.url} alt="category-img" />
              <Button to={`/produtos?categoryId=${category.id}`}>
                {category.name}
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
