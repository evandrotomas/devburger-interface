/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0.15);
  width: 250px;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;

  hr {
    margin: 50px 15px;
  }
`

export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${(props) => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 0px 8px;
  padding-left: 20px;

  .icon {
    color: #ffffff;
  }
`

export const ListLink = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-left: 8px;
`
