import React from 'react';
import Board from 'react-trello';
import Base from './BasePage';
import { Col, Row, Card } from 'react-bootstrap';
import CardGrupos from '../components/Grupos';
import CardHeader from 'react-bootstrap/esm/CardHeader';

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

        <nav style={{ height: '56px', backgroundColor: '#2D4354', marginBottom: '15px' }}>
          <Row>
          <Col style={{ textAlign: "center",marginTop: '14px', color: '#FFF' }}>
            Visão geral das etapas do quadro XXXXX
          </Col>
          </Row>
        </nav>

        <Row>

          <Card className="border" style={{ backgroundColor: '#F3F3F3', marginLeft: '40px', borderRadius: '11px', height: '50rem', width: "20rem"}}>
            {/* fazer um component de outros cards que entrem */}
            <div style={{textAlign: "center" }}>
            Grupos
            </div>
            <CardGrupos/>
          </Card>
          <Col>
            <Board  style={{ backgroundColor: '#F3F3F3' }} data={data} />
          </Col>
        </Row>
      </Base>

    </>
  );
}
