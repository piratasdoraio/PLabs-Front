import React, { useState, useEffect } from 'react';
import Board from 'react-trello';
import Base from './BasePage';
import { Col, Row, Card } from 'react-bootstrap';
import CardGrupos from '../components/Grupos';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import './style.css';

let grupos = {
  grupos: [
    {
      id: '0',
      nome: 'Grupo Atalaia',
      quadros: [
        {
          id: '0',
          nome: 'Quadro candidatos',
          lanes: [
            {
              id: 'Coluna1',
              title: 'Fase 1',
              label: '2/2',
              cards: [
                {
                  id: 'Card1',
                  title: 'Jose',
                  description: 'Vendedor de fruta',
                  label: 'Alta prioridade',
                  draggable: false,
                },
                {
                  id: 'Card2',
                  title: 'Roberto',
                  description: 'Designer',
                  label: 'Media Prioridade',
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
        },
        {
          id: '1',
          nome: 'Quadro membros',
          lanes: [
            {
              id: '1',
              title: 'Fase 1',
              label: '1/1',
              cards: [
                {
                  id: 'Card1',
                  title: 'Julio',
                  description: 'Musico',
                  label: 'Alta prioridade',
                  draggable: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '1',
      nome: 'Grupo Orla',
      quadros: [
        {
          id: '3',
          nome: 'Quadro candidatos',
          lanes: [
            {
              id: '1',
              title: 'Fase 1',
              label: '2/3',
              cards: [
                {
                  id: 'Card1',
                  title: 'Pedro',
                  description: 'Programador',
                  label: 'Extrema prioridade',
                  draggable: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// let data = {
//   lanes: [
//     {
//       id: 'Coluna1',
//       title: 'Fase 1',
//       label: '2/2',
//       cards: [
//         {
//           id: 'Card1',
//           title: 'Jose',
//           description: 'Vendedor de fruta',
//           label: 'Alta prioridade',
//           draggable: false,
//         },
//         {
//           id: 'Card2',
//           title: 'Roberto',
//           description: 'Designer',
//           label: 'Media prioridade',
//           metadata: { sha: 'be312a1' },
//         },
//       ],
//     },
//     {
//       id: 'Coluna2',
//       title: 'Fase2',
//       label: '0/0',
//       cards: [],
//     },
//   ],
// };

let eventBus: any = undefined;
const setEventBus = (handle: any) => {
  eventBus = handle;
};

// export function setData(grupoIndex: number, quadroIndex: number) {
//   let quadroId = grupoIndex
//   let data

//   if (quadroId == 0) {
//     data = {
//       lanes: [
//         {
//           id: 'Coluna1',
//           title: 'Fase 1',
//           label: '2/2',
//           cards: [
//             {
//               id: 'Card1',
//               title: 'Jose',
//               description: 'Vendedor de fruta',
//               label: 'Alta prioridade',
//               draggable: false,
//             },
//             {
//               id: 'Card2',
//               title: 'Roberto',
//               description: 'Designer',
//               label: 'Media Prioridade',
//               metadata: { sha: 'be312a1' },
//             },
//           ],
//         },
//         {
//           id: 'Coluna2',
//           title: 'Fase2',
//           label: '0/0',
//           cards: [],
//         },
//       ],
//     };
//     eventBus.publish({ type: 'UPDATE_LANES', lanes: data.lanes });
//   } else if (quadroId == 1) {
//     data = {
//       lanes: [
//         {
//           id: '1',
//           title: 'Fase 1',
//           label: '1/1',
//           cards: [
//             {
//               id: 'Card1',
//               title: 'Julio',
//               description: 'Musico',
//               label: 'Alta prioridade',
//               draggable: false,
//             },
//           ],
//         },
//       ],
//     };
//     eventBus.publish({ type: 'UPDATE_LANES', lanes: data.lanes });
//   } else {
//     data = {
//       lanes: [
//         {
//           id: '1',
//           title: 'Fase 1',
//           label: '2/3',
//           cards: [
//             {
//               id: 'Card1',
//               title: 'Pedro',
//               description: 'Programador',
//               label: 'Extrema prioridade',
//               draggable: false,
//             },
//           ],
//         },
//       ],
//     };
//     eventBus.publish({ type: 'UPDATE_LANES', lanes: data.lanes });
//   }

//   return data;
// }

export default function Quadros() {

  const [newGrupos, setNewGrupos] = React.useState(grupos);
  const [actualGrupo, setActualGrupo] = React.useState(0);
  const [actualQuadro, setActualQuadro] = React.useState(0);

  // const [myData, setMyData] = useState(grupos);

  // useEffect(() => {
  //   const saved = JSON.parse(
  //     localStorage.getItem("newGrupos") || JSON.stringify(newGrupos)
  //   );
  //   setNewGrupos(saved);
  // }, []);

  useEffect(() => {
    localStorage.setItem("newGrupos", JSON.stringify(newGrupos));
  }, [newGrupos]);

  const createGroup = (nome: string) => {
    let updateGrupos = {
      grupos: [
        ...newGrupos.grupos,
        {
          id: newGrupos.grupos.length.toString(),
          nome: nome,
          quadros: [],
        },
      ],
    };
    setNewGrupos(updateGrupos);
  }

  const changeBoard = (grupoIndex: number, quadroIndex: number) => {
    setActualGrupo(grupoIndex);
    setActualQuadro(quadroIndex);
  }

  const changeData = (e: any) => {
    // setMyData(e);
    console.log(e)
    return;
    let updateGrupos = newGrupos
    updateGrupos.grupos[actualGrupo].quadros[actualQuadro].lanes = e.lanes

    setNewGrupos(updateGrupos);
  }

  console.log(newGrupos.grupos[actualGrupo].quadros[actualQuadro].lanes)

  return (
    <>
      <Base>
        <nav
          style={{
            height: '56px',
            backgroundColor: '#2D4354',
            marginBottom: '15px',
          }}
        >
          <Row>
            <Col
              style={{ textAlign: 'center', marginTop: '14px', color: '#FFF' }}
            >
              Visão geral das etapas dos quadros
            </Col>
          </Row>
        </nav>
        <Row>
          <Card
            className="border"
            style={{
              backgroundColor: '#F3F3F3',
              marginLeft: '40px',
              marginRight: '20px',
              borderRadius: '11px',
              height: '50rem',
              width: '20rem',

            }}
          >
            {/* fazer um component de outros cards que entrem */}
            <div style={{ textAlign: 'center' }}>Groups</div>
            {newGrupos.grupos.map((grupo, i) => (
              <CardGrupos grupos={grupo} grupoIndex={i} changeBoard={changeBoard} />
            ))}

            <Card className="border-0 larica" onClick={() => createGroup(`Grupo ${newGrupos.grupos.length}`)} style={{ cursor: 'pointer', borderRadius: '15px', paddingBottom: '11px', marginTop: '11px', backgroundColor: '#FFFF', boxShadow: "0px 0px 15px rgba(69, 69, 69, 0.2)" }}>
              <Card.Title></Card.Title>
              <Card.Subtitle style={{ marginLeft: '10px' }} className="text-muted">add new group</Card.Subtitle>
            </Card>
          </Card>

          <Col style={{ backgroundColor: '#F3F3F3',overflowX: "auto", marginRight: '40px', boxShadow: "0px 0px 15px rgba(69, 69, 69, 0.3)", scrollBehavior: "smooth" }}>
            <Board
              eventBusHandle={setEventBus}
              style={{ height: '50rem', backgroundColor: '#F3F3F3',overflowY: "auto" }}
              data={newGrupos.grupos[actualGrupo].quadros[actualQuadro]}
              draggable
              editable
              canAddLanes
              //addCardTitle='asdsad'
              onDataChange={changeData}
              labelStyle={{ background: "#348954" }}
            //canRemoveLanes
            />

          </Col>
        </Row>
      </Base>
    </>
  );
}
