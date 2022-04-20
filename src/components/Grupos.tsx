import Button from '@restart/ui/esm/Button';
import React, { Component, useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Board from 'react-trello';
import Quadros /*, {setData}*/ from '../pages/Quadros';
import './style.css';

type grupo = {
  grupos: {
    id: string;
    nome: string;
    quadros: {
      id: string;
      nome: string;
    }[];
  };
  grupoIndex: number;
  changeBoard: (grupoIndex: number, quadroIndex: number) => void;
  removeGroup: (grupoIndex: number) => void;
  createQuadro: (grupoIndex: number, nome: string) => void;
  removeQuadro: (grupoIndex: number, quadroIndex: number) => void;
};
//'#D2D2D2'
export default function CardGrupos(grupo: grupo) {
  const [quadroNome, setQuadroNome] = useState('');

  const [grupoNome, setGrupoNome] = useState('');

  const changehandler = (e: any) => {
    setQuadroNome(e.target.value);
  };

  const isAdmin = localStorage.getItem('user') === 'admin';

  return (
    <>
      <Card
        className="border-0 ilumina"
        style={{
          borderRadius: '15px',
          paddingBottom: '11px',
          marginTop: '11px',
          backgroundColor: '#FFFF',
          boxShadow: '0px 0px 15px rgba(69, 69, 69, 0.2)',
        }}
      >
        <CardHeader>
          {grupo.grupos.nome}
          <Button
            className="border-0"
            disabled={!isAdmin}
            onClick={() => grupo.removeGroup(grupo.grupoIndex)}
            style={{
              background: '#adb5bd',
              borderRadius: '40px',
              position: 'absolute',
              right: '5px',
              left: '265px',
            }}
          >
            <a style={{ color: '#FFF',position: 'relative', top: '-1.63px' }}> x </a>
          </Button>
        </CardHeader>
        {/* listar esses botoes ae */}
        {grupo.grupos.quadros.map((quadro, i) => (
          <div>
            <Button
              className="border"
              onClick={() => grupo.changeBoard(grupo.grupoIndex, i)}
              style={{
                width: '85%',
                textAlign: 'left',
                borderRadius: '20px',
                marginTop: '5px',
                marginLeft: '10px',
                marginRight: '10px',
              }}
            >
              {quadro.nome}
            </Button>
            <Button
              className="border-0"
              disabled={!isAdmin}
              onClick={() => grupo.removeQuadro(grupo.grupoIndex, i)}
              style={{
                background: '#dc3545',
                borderRadius: '0px',
                position: 'relative',
                right: '25px',
                top: '0px',
                width: '23px',
                height: '28px',
               
              }}
            >
              <a style={{ color: '#FFF', position: 'relative', top: '-2px' }}> x </a>
            </Button>
          </div>
        ))}
        <div>
          <input
            className="border"
            placeholder="Add new Board"
            value={quadroNome}
            onChange={changehandler}
            // onClick={() =>
            //   grupo.createQuadro(
            //     grupo.grupoIndex,
            //     `Quadro ${grupo.grupos.quadros.length + 1}`
            //   )
            // }
            style={{
              width: '85%',
              textAlign: 'left',
              borderRadius: '20px',
              marginTop: '5px',
              marginLeft: '10px',
              marginRight: '10px',
              paddingLeft:'8px'
            }}
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                grupo.createQuadro(
                  grupo.grupoIndex,
                  `Quadro ${quadroNome ? quadroNome : grupo.grupos.quadros.length + 1
                  }`
                );
                setQuadroNome('');
              }
            }}
          >
            {/* Add new Board */}
          </input>
          <Button
            className="border-0"
            disabled={!isAdmin}
            onClick={() => {
              grupo.createQuadro(
                grupo.grupoIndex,
                `Quadro ${
                  quadroNome ? quadroNome : grupo.grupos.quadros.length + 1
                }`
              );
              setQuadroNome('');
            }}
            style={{
              background: '#198754',
              borderRadius: '0px',
              position: 'relative',
              right: '25px',
              top: '0px',
              width: '23px',
              height: '28px',
            }}
          >
            <a style={{ color: '#FFF', font: 'bold',position: 'relative', top: '-2px' }}> + </a>
          </Button>
        </div>
      </Card>
    </>
  );
}
