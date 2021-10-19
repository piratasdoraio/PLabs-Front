import React from 'react';
import Board from 'react-trello';
import Base from './BasePage';
import { Col, Row, Card } from 'react-bootstrap';
import CardGrupos from '../components/Grupos';
import CardHeader from 'react-bootstrap/esm/CardHeader';

let grupos = {
  grupos: [{
    id: '0',
    nome: 'Grupo enquadro',
    quadros: [
      {
        id: '0',
        nome: 'Quadro tubaina'
      },
      {
        id: '1',
        nome: 'Quadro buteco'
      }
    ],
  },
  {
    id: '1',
    nome: 'Grupo carros 😎',
    quadros: [{
      id: '3',
      nome: 'Quadro do vin disel'
    }],
  }
  ]
}
let data = {
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

let eventBus : any = undefined
const setEventBus = (handle : any) => {
  eventBus = handle
}

export function setData(quadroId : string){
  if (quadroId == "0"){
    let data = {
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
    eventBus.publish({type: 'UPDATE_LANES', lanes: data.lanes})
  }else if (quadroId == '1'){
    let data = {
      lanes: [
        {
          id: '1',
          title: 'Carambolas fase 2 :O',
          label: '2/2',
          cards: [
            {
              id: 'Card1',
              title: 'Sabedoria',
              description: 'Musica boa',
              label: 'Alta prioridade',
              draggable: false,
            },
          ],
        },
      ],
    };
    eventBus.publish({type: 'UPDATE_LANES', lanes: data.lanes})
  } else {
    let data = {
      lanes: [
        {
          id: '1',
          title: 'Carambolas fase 2 :O',
          label: '2/2',
          cards: [
            {
              id: 'Card1',
              title: 'Sabedoria',
              description: 'Musica boa',
              label: 'Alta prioridade',
              draggable: false,
            },
            {
              id: 'Larica',
              title: 'Larica',
              label: '0/0',
              cards: [],
            },
             {
              id: 'Cansado',
              title: 'Cansado',
              label: '0/0',
              cards: [
                {
                  id: 'Card1',
                  title: 'Escrever',
                  description: 'Notbook',
                  label: 'Muito baixa prioridade',
                  draggable: false,
                },
              ],
            },
          ],
        },
      ],
    };
    eventBus.publish({type: 'UPDATE_LANES', lanes: data.lanes})
  }
  return data;
}

export default function Quadros() {
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
            {grupos.grupos.map(grupo =>(
              <CardGrupos grupos={grupo}/>
            ))}
            
          </Card>
          <Col>
            <Board eventBusHandle={setEventBus} style={{ backgroundColor: '#F3F3F3' }} data={data} />
          </Col>
        </Row>
      </Base>

    </>
  );
}
