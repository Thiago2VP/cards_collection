import styled from 'styled-components';

import * as colors from '../../config/colors';
import draBack from '../../assets/images/dracomania.webp';
import mitback from '../../assets/images/mitomania.webp';
import narBack from '../../assets/images/naruto.webp';
import wolback from '../../assets/images/wolverine.webp';

export const SectionWide = styled.section`
  margin: auto;
  background: black;
  background: ${colors.skinGradient};
  border-radius: 4.5rem;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  position: relative;
`;

export const Screen = styled.div`
  border-radius: 4rem;
  background: black;
  width: 94%;
  height: 96%;
  margin: auto 2% auto auto;
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const Camera = styled.div`
  border-radius: 100%;
  background: black;
  width: 2.5%;
  height: 5%;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  left: 1%;
`;

export const CamRefl = styled.div`
  background: grey;
  background: ${colors.gryScGradient};
  width: 65%;
  height: 65%;
  border-radius: 100%;
  margin: auto;
`;

export const Cheetos = styled.div`
  overflow: hidden;
  background: ${colors.cheetosColor};
  height: 100%;
  width: 20%;
  border-radius: 3.5rem 0 0 3.5rem;
  position: absolute;
  left: 0;
  z-index: 1;
  transition: width 1s linear 0.1s;

  &:hover {
    z-index: 2;
    width: 40%;
    transition: width 1s linear 0.1s;
  }
`;

export const Fandangos = styled.div`
  overflow: hidden;
  background: ${colors.fandangosColor};
  height: 100%;
  width: 20%;
  position: absolute;
  left: 20%;
  z-index: 1;
  transition: width 1s linear 0.1s;

  &:hover {
    z-index: 2;
    width: 40%;
    transition: width 1s linear 0.1s;
  }
`;

export const Ruffles = styled.div`
  overflow: hidden;
  background: ${colors.rufflesColor};
  height: 100%;
  width: 20%;
  position: absolute;
  right: 40%;
  z-index: 1;
  transition: width 1s linear 0.1s;

  &:hover {
    z-index: 2;
    width: 40%;
    transition: width 1s linear 0.1s;
  }
`;

export const Elma = styled.div`
  overflow: hidden;
  background: ${colors.elmaBack};
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  height: 100%;
  width: 40%;
  border-radius: 0 3.5rem 3.5rem 0;
  position: absolute;
  left: 60%;
  z-index: 1;

  h1 {
    font-family: 'Luckiest Guy', cursive;
    font-size: 3.3rem;
    text-align: center;
    letter-spacing: 0.2rem;
    color: ${colors.color};
    transition: visibility 0s opacity 0.5s linear;
  }
  p {
    text-align: center;
    font-size: 2.3rem;
    font-weight: bold;
    max-width: 80%;
    margin: 1.5rem auto;
    transition: visibility 0s opacity 0.5s linear;
  }
  .arrowRghtMain {
    animation: pointing 1.2s linear 0.1s infinite;
    img {
      transform: rotate(-15deg);
    }
  }

  @keyframes pointing {
    0% {
      margin-right: 0;
    }
    25% {
      margin-right: 15px;
    }
    100% {
      margin-right: 0;
    }
  }
`;

export const Dracomania = styled.div`
  overflow: hidden;
  background: green;
  background-image: url(${draBack});
  background-size: auto 720px;
  background-position: top center;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  height: 100%;
  border-radius: 3.5rem;
  position: absolute;
  right: 0;
  z-index: 2;
  transition: width 1.8s linear 0.1s;

  .LogoDraco {
    animation: change 1.5s linear 0.1s infinite;
  }

  @keyframes change {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Mitomania = styled.div`
  overflow: hidden;
  background: gold;
  background-image: url(${mitback});
  background-size: auto 720px;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  height: 100%;
  border-radius: 3.5rem;
  position: absolute;
  right: 0;
  z-index: 2;
  transition: width 1.8s linear 0.1s;

  .LogoMito {
    animation: change 1.5s linear 0.1s infinite;
  }

  @keyframes change {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Naruto = styled.div`
  overflow: hidden;
  background: yellow;
  background-image: url(${narBack});
  background-size: auto 720px;
  background-position: top right;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  height: 100%;
  border-radius: 3.5rem;
  position: absolute;
  right: 0;
  z-index: 2;
  transition: width 1.8s linear 0.1s;

  .logoImg {
    animation: logoChange 1.5s linear 0.1s infinite;
  }
  .ArrowLeft {
    animation: arrowLChange 1.5s linear 0.1s infinite;
  }
  .ArrowRight {
    animation: arrowRChange 1.5s linear 0.1s infinite;
  }

  @keyframes arrowRChange {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes arrowLChange {
    0% {
      transform: scale(1) rotate(180deg);
    }
    50% {
      transform: scale(1.1) rotate(180deg);
    }
    100% {
      transform: scale(1) rotate(180deg);
    }
  }
  @keyframes logoChange {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Xmen = styled.div`
  overflow: hidden;
  background: red;
  background-image: url(${wolback});
  background-size: 1280px 720px;
  background-position: top center;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  height: 100%;
  border-radius: 3.5rem;
  position: absolute;
  right: 0;
  z-index: 2;
  transition: width 1.8s linear 0.1s;

  .LogoXmen {
    animation: xArrowchange 1.5s linear 0.1s infinite;
  }
  .logoImg {
    animation: logoChange 1.5s linear 0.1s infinite;
  }

  @keyframes xArrowchange {
    0% {
      transform: scale(1) rotate(180deg);
    }
    50% {
      transform: scale(1.1) rotate(180deg);
    }
    100% {
      transform: scale(1) rotate(180deg);
    }
  }
  @keyframes logoChange {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const SectionThin = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  position: relative;
`;

export const ThinPresent = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  position: relative;
  text-align: center;
  background-color: rgba(255, 243, 35, 0.6);
  transition: width 1.8s linear 0.1s;
  min-height: 100vh;

  h1 {
    font-size: 6rem;
    text-shadow: 1px 0 #f90716, 0 -1px #f90716, 0 1px #f90716, -1px 0 #f90716;
    transition: visibility 1.8s linear 0.1s;
    color: ${colors.rufflesColor};
  }
  p {
    font-size: 3rem;
    font-weight: bold;
    color: #100ea0;
    padding: 1rem;
    margin-top: 1rem;
    transition: visibility 1.8s linear 0.1s;
  }
  button {
    background-color: ${colors.color};
    color: ${colors.rufflesColor};
    border: none;
    font-size: 4rem;
    display: flex;
    align-itens: center;
    justify-content: center;
    padding: 1.4rem 0.8rem 1rem 1.6rem;
    border-radius: 100%;
    width: 68px;
    height: 68px;
    margin: 4rem auto;
    text-align: center;
    cursor: pointer;
    animation: playScale 1.5s linear 0.1s infinite;
  }
  @keyframes playScale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Map = styled.div`
  margin: auto;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  min-height: 100vh;
  background: ${colors.cheetosColor};
  transition: width 1.8s linear 0.1s;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;

  .dracoIsla {
    width: 600px;
    margin: 2rem 15%;
    animation: islFloat 1.5s linear 0.1s infinite;
  }
  .mitoIsla {
    width: 620px;
    margin: 3rem 60%;
    animation: islFloat 1.5s linear 0.1s infinite;
  }
  .naruIsla {
    width: 700px;
    margin: 5rem 18%;
    animation: islFloat 1.5s linear 0.1s infinite;
  }
  .xmenIsla {
    width: 800px;
    margin: 8rem 50%;
    animation: islFloat 1.5s linear 0.1s infinite;
  }
  @keyframes islFloat {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
