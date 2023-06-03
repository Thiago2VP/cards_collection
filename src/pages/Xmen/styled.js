import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  margin: auto;
  background: rgb(145, 25, 22);
  background: linear-gradient(142deg, rgba(145, 25, 22, 1) 20%, rgba(74, 11, 10, 1) 50%);
  overflow: hidden;
`;

export const CollectionSection = styled.section`
  max-width: 1280px;
  margin: auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-itens: center;
  justfy-content; center;
  text-align: center;

  .CardEffectXmen {
    margin: 2rem auto;
    padding: 0;
    display: flex;
    transition: transform 0.4s linear 0.1s;
  }
  .CardEffectXmen:hover {
    transform: skewY(7deg) rotateY(20deg);
    transition: transform 0.4s linear 0.1s;

    .CardImg {
      padding: 0;
      margin: 0;
    }
  }

  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 90%;
  }
  @media (max-width: 1090px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 840px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 575px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 300px) {
    padding: 0;
  }
`;

export const BackSection = styled.section`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-itens: center;
  justify-content: center;
  font-size: 3rem;

  a {
    background: #f9fd6b;
    display: flex;
    margin: 2.5rem auto;
    padding: 2rem;
    border-radius: 100%;
    color: #4a0b0a;
    border: 5px solid #4a0b0a;
    transition: background-color 0.4s linear 0.1s;
  }
  a:hover {
    background: #4a0b0a;
    color: #f9fd6b;
    border: 5px solid #f9fd6b;
    transition: background-color 0.4s linear 0.1s;
  }
`;
