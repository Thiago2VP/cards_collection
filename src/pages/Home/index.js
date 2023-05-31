import React, { useState, useEffect } from 'react';

import * as Styles from './styled';
import chester from '../../assets/images/chester.png';
import fandangos from '../../assets/images/fandangos.png';
import mouth from '../../assets/images/ruffles.png';
import respingo from '../../assets/images/respingo.png';

export default function Home() {
  const [mediaW, setMediaW] = useState(window.innerWidth);
  const [mediaH, setMediaH] = useState(window.innerHeight);

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
              <h1>Cards Collection</h1>
              <p>Veja algumas das coleções de cartas que vinham nos salgadinhos da elma chips</p>
            </Styles.Elma>
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
