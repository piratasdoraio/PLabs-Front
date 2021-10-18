import Button from '@restart/ui/esm/Button';
import React, {Component} from 'react'
import { Card, Col } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';  
import Board from 'react-trello';

//entrar nome do grupo e quadros desse grupo pra ser reproduzido individual varias vezes em quadros

function Cuçeta(){
  return (
    <div>doga</div>
  )
}
const grupos = {

}
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
      {
        id: 'Coluna2',
        title: 'Fase2',
        label: '0/0',
        cards: [],
      },
      {
        id: 'Coluna2',
        title: 'Fase2',
        label: '0/0',
        cards: [],
      },
      {
        id: 'Coluna2',
        title: 'Fase2',
        label: '0/0',
        cards: [],
      },
    ],
  };
export default function CardGrupos (){
    return (
        <>
        <Card style ={{borderRadius: '15px', paddingBottom: '11px', backgroundColor: '#D2D2D2'}}>
          <CardHeader>
            Grupo zureta
          </CardHeader>
          {/* listar esses botoes ae */}
          {data.lanes.map(lanes => (
            
            <Button style ={{ textAlign: "left",borderRadius: '20px', marginTop: '5px', marginLeft: '10px', marginRight: '10px' }}>
            {lanes.id}
            </Button>
          ))}
        </Card>
        </>
    );
}