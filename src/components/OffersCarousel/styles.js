/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
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

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
  }
`

export const Category_img = styled.img``

export const Image = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
`
