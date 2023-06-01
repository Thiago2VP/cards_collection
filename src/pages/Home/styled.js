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
  background-position: top left;
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
    animation: shadowChange 1.5s linear 0.1s infinite;
  }

  @keyframes shadowChange {
    0% {
      text-shadow: 0px 0px;
    }
    50% {
      text-shadow: 1px 1px;
    }
    100% {
      text-shadow: 0px 0px;
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
    animation: shadowChange 1.5s linear 0.1s infinite;
  }

  @keyframes shadowChange {
    0% {
      text-shadow: 0px 0px;
    }
    50% {
      text-shadow: 1px 1px;
    }
    100% {
      text-shadow: 0px 0px;
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

  .LogoNaru {
    animation: shadowChange 1.5s linear 0.1s infinite;
  }
  .logoImg {
    animation: logoChange 1.5s linear 0.1s infinite;
  }
  .ArrowLeft {
    transform: rotate(180deg);
  }

  @keyframes shadowChange {
    0% {
      text-shadow: 0px 0px;
    }
    50% {
      text-shadow: -1px -1px;
    }
    100% {
      text-shadow: 0px 0px;
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
    animation: shadowChange 1.5s linear 0.1s infinite;
  }
  .logoImg {
    animation: logoChange 1.5s linear 0.1s infinite;
  }
  .ArrowLeft {
    transform: rotate(180deg);
  }

  @keyframes shadowChange {
    0% {
      text-shadow: 0px 0px;
    }
    50% {
      text-shadow: -1px -1px;
    }
    100% {
      text-shadow: 0px 0px;
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
