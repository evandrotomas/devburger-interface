/* eslint-disable prettier/prettier */
import { Link as ReactLink } from 'react-router-dom'
import styled from 'styled-components'

import BackgroundLogin2 from '../../assets/Fundo 2 login.svg'
import BackgroundLogin from '../../assets/Fundo Login.svg'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`
export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`
export const RighContainer = styled.div`
  background: url('${BackgroundLogin2}');
  background-color: #1e1e1e;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    a {
      text-decoration: underline;
    }
  }
`
export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  line-height: 40px;
  color: #46bb7b;

  span {
    font-family: 'Road Rage', sans-serif;
    color: #9758a6;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;
  }
`
export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #fff;
`
export const Button = styled.button`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 5px;
  background-color: #9758a6;
  font-family: 'Road Rage', sans-serif;
  font-size: 30px;
  color: #fff;

  &:hover {
    background-color: #6f3576;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
  }
`
