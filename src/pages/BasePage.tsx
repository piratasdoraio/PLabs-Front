import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import Navbar from '../components/Navbar';

export default function Base({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
      <Row
        style={{
          backgroundColor: '#FF0000',
          height: '100px',
          marginTop: '50px',
          // width: '100%',
          // marginRight: '0px',
        }}
      >
        <Col>
          <b style={{ color: '#fff', marginLeft: '250px' }}>BNI</b>
        </Col>
        <Col>
          <Row>
            <Col sm={1}>
              <b style={{ color: '#fff' }}>EQUIPE PDR</b>
            </Col>
            <Col sm={11}>
              <img
                src="pdr_corp.png"
                style={{
                  maxHeight: '80px',
                  maxWidth: '80px',
                  marginLeft: '30px',
                }}
              />
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <img
                src="pdr_corp.png"
                style={{
                  maxHeight: '80px',
                  maxWidth: '80px',
                  marginLeft: '50px',
                }}
              />
            </Col>
          </Row> */}
        </Col>
      </Row>
    </>
  );
}
