/* eslint-disable prettier/prettier */
import { useLocation } from 'react-router-dom'

import Cart from '../../assets/cart.png'
import Person from '../../assets/person.png'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  PageLink,
  PageLink1,
  ContainerRight,
  ContainerText,
} from './styles'

export function Header() {
  const { logout } = useUser()
  const location = useLocation()

  const logout_user = () => {
    logout()
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink1 to="/" isActive={location.pathname == '/'}>
          Home
        </PageLink1>
        <PageLink1
          to="/produtos"
          isActive={location.pathname.includes('produtos')}
        >
          Ver produtos
        </PageLink1>
      </ContainerLeft>

      <ContainerRight>
        <PageLink to="/carrinho">
          <img src={Cart} alt="cart-img" />
        </PageLink>
        <div className="line"></div>
        <PageLink>
          <img src={Person} alt="person-img" />
        </PageLink>

        <ContainerText>
          <p>Olá, Evandro</p>
          <PageLink onClick={logout_user} className="exit">
            Sair
          </PageLink>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
