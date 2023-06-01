import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as Styles from './styled';
import chester from '../../assets/images/chester.png';
import fandangos from '../../assets/images/fandangos.png';
import mouth from '../../assets/images/ruffles.png';
import respingo from '../../assets/images/respingo.png';
import arrowRight from '../../assets/images/arrow-right.png';
import naruLogo from '../../assets/images/narulogo.png';
import wolverLogo from '../../assets/images/wolverlogo.png';

export default function Home() {
  const [mediaW, setMediaW] = useState(window.innerWidth);
  const [mediaH, setMediaH] = useState(window.innerHeight);
  const [preVis, setPreVis] = useState('hidden');
  const [dracoW, setDracoW] = useState('0%');
  const [dracVis, setDracVis] = useState('hidden');
  const [mitoW, setMitoW] = useState('0%');
  const [mitoVis, setMitoVis] = useState('hidden');
  const [naruW, setNaruW] = useState('0%');
  const [naruVis, setNaruVis] = useState('hidden');
  const [xmenW, setXmenW] = useState('0%');
  const [xmenVis, setXmenVis] = useState('hidden');

  if (mediaW > 1280) {
    setMediaW(1280);
  }

  function handleResize() {
    setMediaW(window.innerWidth);
    setMediaH(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  setTimeout(() => {
    setPreVis('visible');
  }, '600');

  async function dracVisib() {
    setTimeout(() => {
      setDracVis('visible');
    }, '1800');
  }

  async function mitVisib() {
    setTimeout(() => {
      setMitoVis('visible');
    }, '1800');
  }

  async function narVisib() {
    setTimeout(() => {
      setNaruVis('visible');
    }, '1800');
  }

  async function xmeVisib() {
    setTimeout(() => {
      setXmenVis('visible');
    }, '1800');
  }

  return (
    <main>
      {mediaW >= mediaH * (16 / 9) ? (
        <Styles.SectionWide
          style={{
            width: `${mediaW - 15}px`,
            height: `${(592 * mediaW) / 1280 - 15}px`,
            marginTop: `4vh`,
          }}
        >
          <Styles.Screen>
            <Styles.Cheetos>
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'end',
                }}
              >
                <img src={chester} alt="mascote do Cheetos" style={{ height: '65%' }} />
              </div>
            </Styles.Cheetos>
            <Styles.Fandangos>
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={fandangos} alt="mascote do Fandangos" style={{ height: '65%' }} />
              </div>
            </Styles.Fandangos>
            <Styles.Ruffles>
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={mouth} alt="Boca do Ruffles" style={{ height: '65%' }} />
              </div>
            </Styles.Ruffles>
            <Styles.Elma>
              <img
                src={respingo}
                alt="Respingo de tinta"
                style={{
                  width: '70%',
                  position: 'absolute',
                  zIndex: '-1',
                  bottom: '1%',
                  left: '-20%',
                }}
              />
              <img
                src={respingo}
                alt="Respingo de tinta"
                style={{
                  width: '70%',
                  position: 'absolute',
                  zIndex: '-1',
                  top: '1%',
                  right: '-20%',
                }}
              />
              <h1 style={{ visibility: `${preVis}` }}>Cards Collection</h1>
              <p style={{ visibility: `${preVis}` }}>
                Veja algumas das coleções de cartas que vinham nos salgadinhos da elma chips
              </p>
              <button
                type="button"
                className="arrowRghtMain"
                style={{
                  position: 'absolute',
                  width: '13%',
                  zIndex: '1',
                  bottom: '6%',
                  right: '8%',
                  visibility: `${preVis}`,
                  cursor: 'pointer',
                  background: '#ddd21f',
                  border: 'none',
                }}
                onClick={() => {
                  setDracoW('100%');
                  dracVisib();
                }}
                onKeyDown={() => {
                  setDracoW('100%');
                  dracVisib();
                }}
              >
                <img style={{ width: '100%' }} src={arrowRight} alt="Seta para a direita" />
              </button>
            </Styles.Elma>
            <Styles.Dracomania style={{ width: `${dracoW}` }}>
              <Link
                to="/dracomania"
                className="LogoDraco"
                style={{
                  position: 'absolute',
                  top: '8%',
                  right: '8%',
                  textDecoration: 'none',
                  fontSize: '6rem',
                  fontFamily: 'ArgorBiwSc, sans-serif',
                  letterSpacing: '1px',
                  color: '#530303',
                  textShadow: '1px 1px #bd0202',
                  visibility: `${dracVis}`,
                }}
              >
                ¤+Dracomania
              </Link>
              <button
                type="button"
                className="LogoDraco"
                style={{
                  position: 'absolute',
                  zIndex: '1',
                  bottom: '6%',
                  left: '8%',
                  width: '6%',
                  height: '12%',
                  paddingBottom: '2rem',
                  visibility: `${dracVis}`,
                  cursor: 'pointer',
                  background: '#530303',
                  border: 'none',
                  borderRadius: '100%',
                  color: '#2a300c',
                  fontSize: '8rem',
                  fontFamily: 'ArgorBiwSc, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => {
                  setDracoW('0%');
                  setDracVis('hidden');
                }}
                onKeyDown={() => {
                  setDracoW('0%');
                  setDracVis('hidden');
                }}
              >
                {'<'}
              </button>
              <button
                type="button"
                className="LogoDraco"
                style={{
                  position: 'absolute',
                  zIndex: '1',
                  bottom: '6%',
                  right: '8%',
                  width: '6%',
                  height: '12%',
                  paddingBottom: '2rem',
                  visibility: `${dracVis}`,
                  cursor: 'pointer',
                  background: '#530303',
                  border: 'none',
                  borderRadius: '100%',
                  color: '#2a300c',
                  fontSize: '8rem',
                  fontFamily: 'ArgorBiwSc, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => {
                  setMitoW('100%');
                  mitVisib();
                  setDracVis('hidden');
                }}
                onKeyDown={() => {
                  setMitoW('100%');
                  mitVisib();
                  setDracVis('hidden');
                }}
              >
                {'>'}
              </button>
            </Styles.Dracomania>
            <Styles.Mitomania style={{ width: `${mitoW}` }}>
              <Link
                to="/mitomania"
                className="LogoMito"
                style={{
                  position: 'absolute',
                  top: '8%',
                  left: '8%',
                  textDecoration: 'none',
                  fontSize: '6.5rem',
                  fontFamily: 'Flatearth, sans-serif',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  color: '#743f22',
                  textShadow: '1px 1px black',
                  visibility: `${mitoVis}`,
                }}
              >
                Mithomania
              </Link>
              <button
                type="button"
                className="LogoMito"
                style={{
                  position: 'absolute',
                  zIndex: '1',
                  bottom: '6%',
                  left: '8%',
                  width: '7%',
                  height: '14%',
                  paddingBottom: '1rem',
                  visibility: `${mitoVis}`,
                  cursor: 'pointer',
                  background: '#ffd681',
                  border: 'none',
                  borderRadius: '100%',
                  color: '#743f22',
                  fontSize: '5.5rem',
                  fontWeight: 'bold',
                  fontFamily: 'Flatearth, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => {
                  setMitoW('0%');
                  setMitoVis('hidden');
                  dracVisib();
                }}
                onKeyDown={() => {
                  setMitoW('0%');
                  setMitoVis('hidden');
                  dracVisib();
                }}
              >
                ↞
              </button>
              <button
                type="button"
                className="LogoMito"
                style={{
                  position: 'absolute',
                  zIndex: '1',
                  bottom: '6%',
                  right: '8%',
                  width: '7%',
                  height: '14%',
                  paddingBottom: '1rem',
                  visibility: `${mitoVis}`,
                  cursor: 'pointer',
                  background: '#ffd681',
                  border: 'none',
                  borderRadius: '100%',
                  color: '#743f22',
                  fontSize: '5.5rem',
                  fontWeight: 'bold',
                  fontFamily: 'Flatearth, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => {
                  setNaruW('100%');
                  narVisib();
                  setMitoVis('hidden');
                }}
                onKeyDown={() => {
                  setNaruW('100%');
                  narVisib();
                  setMitoVis('hidden');
                }}
              >
                ↠
              </button>
            </Styles.Mitomania>
            <Styles.Naruto style={{ width: `${naruW}` }}>
              <Link
                to="/naruto"
                style={{
                  position: 'absolute',
                  top: '8%',
                  right: '8%',
                  width: '23%',
                  visibility: `${naruVis}`,
                }}
              >
                <img src={naruLogo} alt="Logotipo do naruto" style={{ width: '100%' }} className="logoImg" />
              </Link>
              <button
                type="button"
                className="LogoNaru ArrowLeft"
                style={{
                  position: 'absolute',
                  zIndex: '1',
                  bottom: '6%',
                  left: '8%',
                  width: '6.5%',
                  height: '13%',
                  paddingBottom: '1rem',
                  visibility: `${naruVis}`,
                  cursor: 'pointer',
                  background: '#a3545a',
                  border: 'none',
                  borderRadius: '100%',
                  color: '#20120b',
                  fontSize: '5.5rem',
                  fontWeight: 'bold',
                  fontFamily: 'Flatearth, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => {
                  setNaruW('0%');
                  setNaruVis('hidden');
                  mitVisib();
                }}
                onKeyDown={() => {
                  setNaruW('0%');
                  setNaruVis('hidden');
                  mitVisib();
                }}
              >
                ➡
              </button>
              <button
                type="button"
                className="LogoNaru"
                style={{
                  position: 'absolute',
                  zIndex: '1',
                  bottom: '6%',
                  right: '8%',
                  width: '6.5%',
                  height: '13%',
                  paddingBottom: '1rem',
                  visibility: `${naruVis}`,
                  cursor: 'pointer',
                  background: '#a3545a',
                  border: 'none',
                  borderRadius: '100%',
                  color: '#20120b',
                  fontSize: '5.5rem',
                  fontWeight: 'bold',
                  fontFamily: 'Flatearth, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => {
                  setXmenW('100%');
                  xmeVisib();
                  setNaruVis('hidden');
                }}
                onKeyDown={() => {
                  setXmenW('100%');
                  xmeVisib();
                  setNaruVis('hidden');
                }}
              >
                ➡
              </button>
            </Styles.Naruto>
            <Styles.Xmen style={{ width: `${xmenW}` }}>
              <Link
                to="/xmen"
                style={{
                  position: 'absolute',
                  top: '8%',
                  right: '8%',
                  width: '19%',
                  visibility: `${xmenVis}`,
                }}
              >
                <img
                  src={wolverLogo}
                  alt="Logotipo de Wolverine e os X-men"
                  style={{ width: '100%' }}
                  className="logoImg"
                />
              </Link>
              <button
                type="button"
                className="LogoXmen ArrowLeft"
                style={{
                  position: 'absolute',
                  zIndex: '1',
                  bottom: '6%',
                  left: '8%',
                  width: '6.5%',
                  height: '13%',
                  paddingBottom: '1rem',
                  visibility: `${xmenVis}`,
                  cursor: 'pointer',
                  background: '#d1a01d',
                  border: 'none',
                  borderRadius: '100%',
                  color: '#971312',
                  fontSize: '5.5rem',
                  fontWeight: 'bold',
                  fontFamily: 'Flatearth, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => {
                  setXmenW('0%');
                  setXmenVis('hidden');
                  narVisib();
                }}
                onKeyDown={() => {
                  setXmenW('0%');
                  setXmenVis('hidden');
                  narVisib();
                }}
              >
                ➛
              </button>
            </Styles.Xmen>
          </Styles.Screen>
          <Styles.Camera>
            <Styles.CamRefl />
          </Styles.Camera>
        </Styles.SectionWide>
      ) : (
        <div>
          <h1>Hello World!</h1>
        </div>
      )}
    </main>
  );
}
