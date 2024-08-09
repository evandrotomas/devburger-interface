/* eslint-disable prettier/prettier */

import { PropTypes } from 'prop-types'

import { SideMenuAdmin } from '../../components'
import { paths } from '../../constants/paths'
import { EditProduct } from './EditProduct'
import { ListProducts } from './ListProducts'
import { NewProduct } from './NewProduct'
import { Orders } from './Orders'
import { Container, ContainerItemns } from './styles'

export function Admin({ match: path }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItemns>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
        {path === paths.NewProduct && <NewProduct />}
        {path === paths.EditProduct && <EditProduct />}
      </ContainerItemns>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}
