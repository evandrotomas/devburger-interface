/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user_data, set_user_data] = useState({})

  const put_user_data = async (user_info) => {
    set_user_data(user_info)

    await localStorage.setItem(
      'hamburgueria:use_data',
      JSON.stringify(user_info),
    )
  }

  const logout = async () => {
    await localStorage.removeItem('hamburgueria:use_data')
  }

  useEffect(() => {
    const load_user_data = async () => {
      const client_info = await localStorage.getItem('hamburgueria:use_data')

      if (client_info) {
        set_user_data(JSON.parse(client_info))
      }
    }
    load_user_data()
  }, [])

  return (
    <UserContext.Provider value={{ put_user_data, user_data, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }

  return context
}

UserProvider.protoTypes = {
  children: PropTypes.node,
}
