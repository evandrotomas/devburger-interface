/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e5e5e5;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
  height: max-content;
  min-height: 220px;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 45px;
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  p {
    font-size: 16px;
    color: #9758a6;
    font-weight: bold;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 1fr;
  padding: 10px;
  width: 800px;
  grid-gap: 10px 36px;
  border-bottom: 1px solid #b5b5b5;
  img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
  }

  .trash {
    margin-right: auto;
    font-size: 20px;
  }
  .quantity-container {
    display: flex;
    gap: 20px;
  }

  button {
    height: 30px;
    background: transparent;
    border: none;
    font-size: 24px;
    align-content: center;
    height: 115px;
  }

  p {
    font-size: 16px;
    color: #000009;
    align-content: center;
  }
`

export const Empty_cart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`
