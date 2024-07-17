/* eslint-disable prettier/prettier */
import Cart_logo1 from '../../assets/logo-removebg-preview.png'
import { Cart_items, Cart_resume } from '../../components'
import { Cart_img, Container, Div, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <Div>
        <Cart_img src={Cart_logo1} alt="logo-Cart" />
      </Div>
      <Wrapper>
        <Cart_items />
        <Cart_resume />
      </Wrapper>
    </Container>
  )
}
