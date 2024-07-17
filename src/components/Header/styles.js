/* eslint-disable prettier/prettier */
import { Link as ReactLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  height: 45px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  .exit {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #9758a6;
  }
`

export const PageLink = styled(ReactLink)`
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;

  .link-home {
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 200px;
  width: 400px;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: end;
  width: -webkit-fill-available;
  margin-right: 200px;

  .line {
    height: 40px;
    border-right: 0.5px solid;
    color: #555555;
  }
`

export const ContainerText = styled.div`
  p {
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`
export const PageLink1 = styled(ReactLink)`
  text-decoration: none;
  color: ${(props) => (props.isActive ? '#9758a6' : '#555555')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
`
