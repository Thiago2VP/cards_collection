import styled from 'styled-components';
import * as colors from '../../config/colors';

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
  }
  p {
    text-align: center;
    font-size: 2.3rem;
    font-weight: bold;
    max-width: 80%;
    margin: 1.5rem auto;
  }
`;
