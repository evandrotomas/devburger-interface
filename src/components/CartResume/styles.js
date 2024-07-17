/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e5e5e5;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 15px;
  height: 220px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items items-price'
      'tax tax-price';

    .title {
      grid-area: title;
      margin-bottom: 20px;
      font-weight: bold;
      min-width: 280px;
      display: flex;
      justify-content: center;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .tax {
      grid-area: tax;
    }

    .tax-price {
      grid-area: tax-price;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 30px;

    .total,
    .total-price {
      font-weight: bold;
    }
  }
`
