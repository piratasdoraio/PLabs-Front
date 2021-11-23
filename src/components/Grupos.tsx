import Button from '@restart/ui/esm/Button';
import React, {Component} from 'react'
import { Card, Col } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';  
import Board from 'react-trello';
import Quadros/*, {setData}*/ from '../pages/Quadros';
import './style.css';

  type grupo = {
    grupos:{
      id:string,
      nome:string,
      quadros:{
        id:string,
        nome:string
      }[];
    },
    grupoIndex: number,
    changeBoard: (grupoIndex: number, quadroIndex: number) => void,
  }
  //'#D2D2D2'
export default function CardGrupos (grupo : grupo){
    return (
        <>
        <Card className = "border-0 larica" style = {{borderRadius: '15px', paddingBottom: '11px',marginTop: '11px', backgroundColor: '#FFFF', boxShadow: "0px 0px 15px rgba(69, 69, 69, 0.2)"}}>
          <CardHeader>
            {grupo.grupos.nome}
          </CardHeader>
          {/* listar esses botoes ae */}
          {grupo.grupos.quadros.map((quadro, i) => (
            <div>
              <Button className='border' onClick = {() => grupo.changeBoard(grupo.grupoIndex, i)} style ={{ width:'85%', textAlign: "left",borderRadius: '20px', marginTop: '5px', marginLeft: '10px', marginRight: '10px' }}>
            {quadro.nome}
            </Button>
            <Button className='border-0' style={{background: '#ff5262',borderRadius: '40px', position:'relative', right:'5px' , top:'0px'}}><a style = {{color:'#FFF'}}> x </a></Button>
            </div>
            
          ))}
        </Card>
        </>
    );
}