/* eslint-disable prettier/prettier */

export const format_date = (date) => {
  return new Date(date).toLocaleDateString('pt-Br', {
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}
