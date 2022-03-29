import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Base from './BasePage';
import Sobre from '../Sobre.svg';

export default function Home() {
  return (
    <>
      <Base>
        <div>
          <Row>
            {/* <Col> */}
            <img
              src="https://cdn.bniconnectglobal.com/images/CMS-Slider-3.jpg"
              style={{ height: '600px', objectFit: 'cover' }}
            />
            {/* </Col> */}
          </Row>
          <div
            style={{
              position: 'absolute',
              top: '480px',
              left: '430px',
              transform: 'scale(1.25)',
            }}
          >
            <h1
              style={{
                color: '#FFFF',
                textShadow: '2px 2px #000000',
              }}
            >
              BNI | FrameDesk
            </h1>
            <br />
            <b
              style={{
                color: '#FFF',

                textShadow: '2px 2px #000000',
                fontSize: '20px',
              }}
            >
              Ferramenta de Gerenciamento de Etapas
            </b>
          </div>
        </div>
        <div
          style={{
            marginLeft: '250px',
            marginRight: '250px',
            justifyContent: 'center ',
            alignItems: 'center',
          }}
        >
          <img src={Sobre} />
          <br />
          <p></p>
        </div>
      </Base>
    </>
  );
}
