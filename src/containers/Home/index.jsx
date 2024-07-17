/* eslint-disable prettier/prettier */
import Home_logo1 from '../../assets/logo-removebg-preview.png'
import { Category_carousel, Header, Offers_carousel } from '../../components'
import { Container, Home_img, Div } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <Div>
        <Home_img src={Home_logo1} alt="logo-home" />
      </Div>
      <Category_carousel />
      <Offers_carousel />
    </Container>
  )
}
