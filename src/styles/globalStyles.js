/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

const global_styles = createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      font-family: "Poppins", sans-serif;
      font-weight: 100;
      font-style: normal;
    }

    button, a {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.6;
      }
    }
`

export default global_styles
