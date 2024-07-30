/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #bebebf;
  min-height: calc(100vh - 45px);
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  min-height: calc(100vh -72px);
  margin-top: 20px;
`

export const Div = styled.div`
  display: flex;
  justify-content: center;
  background: #bc85ca;
`

export const Products_img = styled.img`
  width: 50%;
  height: 250px;
  align-self: end;
  margin: 5px 5px;
`

export const Category_button = styled.button`
  background: none;
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && '2px solid #9758A6'};
  color: ${(props) => (props.isActiveCategory ? '#9758A6' : '#555555')};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;
`
