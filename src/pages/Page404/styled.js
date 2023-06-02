import styled from 'styled-components';

export const Main = styled.main`
  width: 90%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  text-align: center;
  margin: auto;

  h1 {
    font-size: 6rem;
    color: #100ea0;
    text-shadow: 1px 0 #f90716, 0 -1px #f90716, 0 1px #f90716, -1px 0 #f90716;
  }
  p {
    font-size: 3rem;
    font-weight: bold;
    color: #100ea0;
  }
`;
