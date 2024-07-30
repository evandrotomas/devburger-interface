/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'

import { api } from '../../../services/api'
import { format_date } from '../../../utils/formatData'
import { status } from './order-status'
import { Row } from './row'
import { Container, Menu, LinkMenu } from './styles'

export function Orders() {
  const [orders, set_orders] = useState([])
  const [filtered_orders, set_filtered_orders] = useState([])
  const [active_status, set_active_status] = useState([1])
  const [rows, set_rows] = useState([])

  useEffect(() => {
    async function load_orders() {
      const { data } = await api.get('orders')
      set_orders(data)
      set_filtered_orders(data)
    }

    load_orders()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: format_date(order.createdAt),
      status: order.status,
      products: order.products,
    }
  }

  useEffect(() => {
    const new_rows = filtered_orders.map((ord) => createData(ord))
    set_rows(new_rows)
  }, [filtered_orders])

  useEffect(() => {
    if (active_status == 1) {
      set_filtered_orders(orders)
    } else {
      const status_index = status.findIndex((sts) => sts.id == active_status)
      const new_filtered_orders = orders.filter(
        (order) => order.status === status[status_index].value,
      )
      set_filtered_orders(new_filtered_orders)
    }
  }, [orders])

  function handle_status(status) {
    if (status.id === 1) {
      set_filtered_orders(orders)
    } else {
      const new_orders = orders.filter((order) => order.status == status.value)
      set_filtered_orders(new_orders)
    }
    set_active_status(status.id)
  }

  return (
    <Container>
      <Menu>
        {status &&
          status.map((status) => (
            <LinkMenu
              key={status.id}
              onClick={() => handle_status(status)}
              is_active_status={active_status == status.id}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                set_orders={set_orders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
