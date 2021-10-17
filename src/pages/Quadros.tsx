import React from 'react';
import Board from 'react-trello';
import Base from './BasePage';
import Grupos from '../components/Grupos';
import { Col, Row } from 'react-bootstrap';

const data = {
  lanes: [
    {
      id: 'Coluna1',
      title: 'Fase 1',
      label: '2/2',
      cards: [
        {
          id: 'Card1',
          title: 'Jose Cleitin',
          description: 'Vendedor de fruta',
          label: 'Alta prioridade',
          draggable: false,
        },
        {
          id: 'Card2',
          title: 'Roberto',
          description: 'Designer',
          label: 'Deus',
          metadata: { sha: 'be312a1' },
        },
      ],
    },
    {
      id: 'Coluna2',
      title: 'Fase2',
      label: '0/0',
      cards: [],
    },
  ],
};

export default function quadros() {
  return (
    <>
      <Base>
      <nav style={{ height:'56px', backgroundColor: '#2D4354', marginBottom: '15px'}}>
          <div style={{ color:'#FFF'}}>
          grupos XD
          </div> 
          <div style={{textAlign: "center", color:'#FFF'}}>
          Visão geral das etapas do quadro XXXXX
          </div>               
      </nav>
        <Row>
        <Grupos />
          <Col>
          <Board style={{ backgroundColor: '#F3F3F3' }} data={data} />
          </Col>
        </Row>
      </Base>

    </>
  );
}
