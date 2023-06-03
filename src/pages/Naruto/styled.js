import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  margin: auto;
  background: #e4ddc8;
  border: 2rem solid #b35a63;
  border-top-width: 0;
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

  .CardEffectNaru {
    margin: 2rem auto;
    padding: 0;
    display: flex;
    position: relative;
    transition: transform 0.4s linear 0.1s;

    .Label #shur1 {
      display: none;
    }
    .Label #shur1:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur2 {
      display: none;
    }
    .Label #shur2:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur3 {
      display: none;
    }
    .Label #shur3:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur4 {
      display: none;
    }
    .Label #shur4:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur5 {
      display: none;
    }
    .Label #shur5:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur6 {
      display: none;
    }
    .Label #shur6:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur7 {
      display: none;
    }
    .Label #shur7:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur8 {
      display: none;
    }
    .Label #shur8:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur9 {
      display: none;
    }
    .Label #shur9:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur10 {
      display: none;
    }
    .Label #shur10:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur11 {
      display: none;
    }
    .Label #shur11:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur12 {
      display: none;
    }
    .Label #shur12:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur13 {
      display: none;
    }
    .Label #shur13:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur14 {
      display: none;
    }
    .Label #shur14:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur15 {
      display: none;
    }
    .Label #shur15:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur16 {
      display: none;
    }
    .Label #shur16:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur17 {
      display: none;
    }
    .Label #shur17:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur18 {
      display: none;
    }
    .Label #shur18:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur19 {
      display: none;
    }
    .Label #shur19:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur20 {
      display: none;
    }
    .Label #shur20:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur21 {
      display: none;
    }
    .Label #shur21:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur22 {
      display: none;
    }
    .Label #shur22:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur23 {
      display: none;
    }
    .Label #shur23:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur24 {
      display: none;
    }
    .Label #shur24:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur25 {
      display: none;
    }
    .Label #shur25:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur26 {
      display: none;
    }
    .Label #shur26:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur27 {
      display: none;
    }
    .Label #shur27:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur28 {
      display: none;
    }
    .Label #shur28:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
    .Label #shur29 {
      display: none;
    }
    .Label #shur29:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite;
    }
    .Label #shur30 {
      display: none;
    }
    .Label #shur30:checked + div {
      animation: spinCard 0.3s linear 0.1s infinite reverse;
    }
  }
  .CardEffectNaru:hover {
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
  @keyframes spinCard {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
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
    background: #e4ddc8;
    display: flex;
    margin: 2.5rem auto;
    padding: 2rem;
    border-radius: 100%;
    color: black;
    border: 5px solid black;
    transition: background-color 0.4s linear 0.1s;
  }
  a:hover {
    background: black;
    color: #e4ddc8;
    border: 5px solid #e4ddc8;
    transition: background-color 0.4s linear 0.1s;
  }
`;
