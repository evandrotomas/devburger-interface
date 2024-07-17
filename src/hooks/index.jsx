/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types'

import { Cart_provider } from './CartContext'
import { UserProvider } from './UserContext'

export const App_provider = ({ children }) => (
  <UserProvider>
    <Cart_provider>{children}</Cart_provider>
  </UserProvider>
)

App_provider.propTypes = {
  children: PropTypes.node,
}
