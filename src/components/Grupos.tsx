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
    removeGroup: (grupoIndex: number) => void,
    createQuadro: (grupoIndex: number, nome: string) => void,
    removeQuadro: (grupoIndex: number, quadroIndex: number) => void,
  }
  //'#D2D2D2'
export default function CardGrupos (grupo : grupo){
    return (
        <>
        <Card className = "border-0 larica" style = {{borderRadius: '15px', paddingBottom: '11px',marginTop: '11px', backgroundColor: '#FFFF', boxShadow: "0px 0px 15px rgba(69, 69, 69, 0.2)"}}>
          <CardHeader>
            {grupo.grupos.nome}
            <Button className='border-0' onClick = {() => grupo.removeGroup(grupo.grupoIndex)} style={{background: '#adb5bd',borderRadius: '40px', position:'absolute',right:'5px', left:'265px'}}><a style = {{color:'#FFF'}}> x </a></Button>
          </CardHeader>
          {/* listar esses botoes ae */}
          {grupo.grupos.quadros.map((quadro, i) => (
            <div>
              <Button className='border' onClick = {() => grupo.changeBoard(grupo.grupoIndex, i)} style ={{ width:'85%', textAlign: "left",borderRadius: '20px', marginTop: '5px', marginLeft: '10px', marginRight: '10px' }}>
            {quadro.nome}
            </Button>
            <Button className='border-0' onClick = {() => grupo.removeQuadro(grupo.grupoIndex, i)} style={{background: '#dc3545',borderRadius: '0px', position:'relative',right:'25px',top:'0px'}}><a style = {{color:'#FFF'}}> + </a></Button>
            </div>
            
          ))}
          <div>
           <Button className='border' onClick = {() => grupo.createQuadro(grupo.grupoIndex, `Quadro ${grupo.grupos.quadros.length+1}`)} style ={{ width:'85%', textAlign: "left",borderRadius: '20px', marginTop: '5px', marginLeft: '10px', marginRight: '10px' }}>
            Add new Board
            </Button>
            <Button className='border-0' onClick = {() => grupo.createQuadro(grupo.grupoIndex, `Quadro ${grupo.grupos.quadros.length+1}`)} style={{background: '#198754',borderRadius: '0px', position:'relative', right:'25px' , top:'0px'}}><a style = {{color:'#FFF', font:'bold'}}> + </a></Button>
            </div>
        </Card>

        </>
    );
}