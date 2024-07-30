/* eslint-disable prettier/prettier */

import { PropTypes } from 'prop-types'

import { SideMenuAdmin } from '../../components'
import { paths } from '../../constants/paths'
import { ListProducts } from './ListProducts'
import { Orders } from './Orders'
import { Container, ContainerItemns } from './styles'

export function Admin({ match: path }) {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItemns>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
        <ListProducts />
      </ContainerItemns>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}
