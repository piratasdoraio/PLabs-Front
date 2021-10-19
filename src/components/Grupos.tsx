import Button from '@restart/ui/esm/Button';
import React, {Component} from 'react'
import { Card, Col } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';  
import Board from 'react-trello';
import Quadros, {setData} from '../pages/Quadros';

  type grupo = {
    grupos:{
      id:string,
      nome:string,
      quadros:{
        id:string,
        nome:string
      }[];
    }
  }
export default function CardGrupos (grupo : grupo){
    return (
        <>
        <Card style ={{borderRadius: '15px', paddingBottom: '11px',marginTop: '11px', backgroundColor: '#D2D2D2'}}>
          <CardHeader>
            {grupo.grupos.nome}
          </CardHeader>
          {/* listar esses botoes ae */}
          {grupo.grupos.quadros.map(quadro => (
            <Button onClick = {() => setData(quadro.id)} style ={{ textAlign: "left",borderRadius: '20px', marginTop: '5px', marginLeft: '10px', marginRight: '10px' }}>
            {quadro.nome}
            </Button>
          ))}
        </Card>
        </>
    );
}