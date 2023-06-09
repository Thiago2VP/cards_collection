import styled, { createGlobalStyle } from 'styled-components';

import * as colors from '../config/colors';
import backgroundImg from '../assets/images/background.webp';
import '../assets/styles/default.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    scroll-behavior: smooth;
    font-size: 62.5%;
    font-family: 'Blinker', sans-serif;
    color: ${colors.color};
    background: ${colors.backgroundColor};
    background-image: url(${backgroundImg});
    background-repeat: repeat;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 10px;

  @media (max-width: 420px) {
    padding: 5px;
  }
`;
