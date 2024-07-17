/* eslint-disable prettier/prettier */
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001',
})

api.interceptors.request.use(async (config) => {
  const user_data = await localStorage.getItem('hamburgueria:use_data')
  const token = user_data && JSON.parse(user_data).token
  config.headers.authorization = `Bearer ${token}`
  return config
})
