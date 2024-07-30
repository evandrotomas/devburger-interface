/* eslint-disable prettier/prettier */
import CancelIcon from '@mui/icons-material/Cancel'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'

import { api } from '../../../services/api'
import { format_currency } from '../../../utils/formatCurrency'
import { Container, Img, Edit_icon } from './styles'

export function ListProducts() {
  const [products, set_products] = useState([])

  useEffect(() => {
    async function load_orders() {
      const { data } = await api.get('products')

      set_products(data)
    }

    load_orders()
  }, [])

  function is_offer(offer_status) {
    if (offer_status) {
      return <CheckBoxIcon style={{ color: '#46B25C' }} />
    }
    return <CancelIcon style={{ color: 'red' }} />
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preços</TableCell>
              <TableCell align="center">Produto em Oferta</TableCell>
              <TableCell align="center">Imagem do Produto</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{format_currency(product.price)}</TableCell>
                <TableCell align="center">{is_offer(product.offer)}</TableCell>
                <TableCell align="center">
                  <Img src={product.url} alt="product-img" />
                </TableCell>
                <TableCell>
                  <Edit_icon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
