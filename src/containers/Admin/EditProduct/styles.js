/* eslint-disable prettier/prettier */

import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #3c3c3c;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;

    div {
      margin-top: 7px;
    }

    .css-hlgwow {
      margin-top: -5px;
    }
  }
`

export const Label = styled.p`
  font-size: 16px;
  color: #ffffff;

  padding-left: 4px;
`

export const Input = styled.input`
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 8px;

  width: 100%;
  padding-left: 10px;
  min-width: 310px;
`

export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 25px;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #ffffff;
  border-radius: 5px;
  padding: 10px;
  justify-content: center;
  font-weight: bold;
  color: #ffffff;
  gap: 10px;
  max-width: 310px;
  min-height: 75px;

  input {
    opacity: 0;
    width: 1px;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`
