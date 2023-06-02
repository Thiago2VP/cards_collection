import styled from 'styled-components';

import back from '../../assets/images/dragonback.webp';

export const Main = styled.main`
  width: 100%;
  margin: auto;
  background-image: url(${back});
  background-size: 160px auto;
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

  .CardEffectDrac {
    margin: 2rem auto;
    padding: 0;
    display: flex;
    border-radius: 5%;
  }
  .CardEffectDrac:hover {
    background-color: rgba(217, 195, 137, 0.4);
    animation: brightDrac 3.6s linear 0.1s infinite alternate;

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
  @keyframes brightDrac {
    0% {
      box-shadow: 4px 4px 20px #d9c389;
    }
    20% {
      box-shadow: 4px -4px 20px #d9c389;
    }
    40% {
      box-shadow: -4px -4px 20px #d9c389;
    }
    60% {
      box-shadow: -4px 4px 20px #d9c389;
    }
    100% {
      box-shadow: 4px 4px 20px #d9c389;
    }
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
    background: #d9c389;
    display: flex;
    margin: 2.5rem auto;
    padding: 2rem;
    border-radius: 100%;
    color: #aa7226;
    border: 5px solid #aa7226;
  }
  a:hover {
    background: #aa7226;
    color: #d9c389;
    border: 5px solid #d9c389;
  }
`;
