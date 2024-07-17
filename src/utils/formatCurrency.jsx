/* eslint-disable prettier/prettier */
export const format_currency = (value) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
