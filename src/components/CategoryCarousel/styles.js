/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const Category_img = styled.img``

export const Image = styled.img`
  border-radius: 10px;
  width: 200px;
`
export const Button = styled(Link)`
  margin-top: 16px;

  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;

  background: #9758a6;
  border: none;
  height: 50px;
  border-radius: 8px;
`
