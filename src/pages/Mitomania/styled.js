import styled from 'styled-components';

import back from '../../assets/images/eye-of-horus.webp';

export const Main = styled.main`
  width: 100%;
  margin: auto;
  background-image: url(${back});
  background-size: 240px auto;
  background-position: center;
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

  .CardEffectMit {
    margin: 2rem auto;
    padding: 0;
    display: flex;
    transition: transform 0.4s linear 0.1s;
  }
  .CardEffectMit:hover {
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
    color: #744021;
    border: 5px solid #744021;
    transition: background-color 0.4s linear 0.1s;
  }
  a:hover {
    background: #744021;
    color: #f9fd6b;
    border: 5px solid #f9fd6b;
    transition: background-color 0.4s linear 0.1s;
  }
`;
