import React, { useState, useEffect } from 'react';
import Board from 'react-trello';
import Base from './BasePage';
import { Col, Row, Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import CardGrupos from '../components/Grupos';
import TaskPanel from '../components/tasksPane';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import './style.css';

//ao clicar no card, usa seu id
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
                  data:'10/02/2022',
                  author: 'Admin',
                  role: 'Admin',

                  ler: ['admin','pedro'], //permissão para visualizar os cards
                  escrever:['admin'],

                  lanes: [
                    {
                      id: '1',
                      user: 'admin também',
                      role: 'Admin',
                      description: 'admin triste',
                      users: [], //usuarios associados se pa

                      ler: ['admin'],
                      escrever:['admin'],

                      status:false,
                      data:'13/02/2022',
                      respostas:[{
                          id: '1',
                          user: 'admin também',
                          data:'10/02/2022',
                          role: 'Admin',
                          description: 'resposta ao admin triste',
                          permissions: ['admin']
                        },
                        {
                          id: '1',
                          user: 'admin também',
                          data:'11/05/2022',
                          role: 'Admin',
                          description: 'resposta ao admin triste2',
                          permissions: ['admin']
                        }
                      ]
                    },
                  ],
                  tags: [
                    {
                      bgcolor: '#EB5A46',
                      color: 'white',
                      title: 'Atrasado',
                    },
                    {
                      bgcolor: '#0079BF',
                      color: 'white',
                      title: 'Pedro',
                    },
                  ],
                  preTags:[
                    {
                      bgcolor: '#EB5A46',
                      color: 'white',
                      title: 'Atrasado',
                    },
                    {
                      bgcolor: '#0079BF', 
                      color: 'white',
                      title: 'Pedro',
                    },
                    {
                      bgcolor: '#20c997',  
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#ffc107',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#7b58bb',  
                      color: 'white',
                      title: '',
                    },
                  ]
                },
                {
                  id: 'Card2',
                  title: 'Roberto',
                  description: 'Designer',
                  label: 'Media Prioridade',
                  metadata: { sha: 'be312a1' },
                  author: 'Admin',
                  role: 'Admin',
                  lanes: [],
                  tags: [],
                  ler: ['admin','pedro'],
                  escrever:['admin'],
                  data:'10/02/2022',
                  preTags:[
                    {
                      bgcolor: '#EB5A46',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#0079BF', 
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#20c997',  
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#ffc107',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#7b58bb',  
                      color: 'white',
                      title: '',
                    },
                  ]
                },
                {
                  id: 'Card3',
                  title: 'jorge',
                  // description: 'Designer',
                  // label: 'Media Prioridade',
                  // metadata: { sha: 'be312a1' },
                  author: 'Admin',
                  role: 'Admin',
                  lanes: [],
                  tags: [],
                  ler: ['admin','pedro'],
                  escrever:['admin'],
                  data:'10/02/2022',
                  preTags:[
                    {
                      bgcolor: '#EB5A46',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#0079BF', 
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#20c997',  
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#ffc107',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#7b58bb',  
                      color: 'white',
                      title: '',
                    },
                  ]
                  
                },

                {
                  id: 'Card4',
                  title: 'linaldo',
                  // description: 'Designer',
                  // label: 'Media Prioridade',
                  // metadata: { sha: 'be312a1' },
                  author: 'Admin',
                  role: 'Admin',
                  data:'10/02/2022',
                  lanes: [],
                  ler: ['admin','pedro'],
                  escrever:['admin'],
                  tags: [],
                  preTags:[
                    {
                      bgcolor: '#EB5A46',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#0079BF', 
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#20c997',  
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#ffc107',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#7b58bb',  
                      color: 'white',
                      title: '',
                    },
                  ]
                },
              ],
            },
            {
              id: 'Coluna2',
              title: 'Fase2',
              label: '0/0',
              data:'10/02/2022',
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
                  author: 'Admin',
                  role: 'Admin',
                  lanes: [],
                  data:'10/02/2022',
                  ler: ['admin','pedro'],
                  escrever:['admin'],
                  tags: [],
                  preTags:[
                    {
                      bgcolor: '#EB5A46',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#0079BF', 
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#20c997',  
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#ffc107',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#7b58bb',  
                      color: 'white',
                      title: '',
                    },
                  ]
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
                  data:'10/02/2022',
                  ler: ['admin','pedro'],
                  escrever:['admin'],
                  title: 'Pedro',
                  description: 'Programador',
                  label: 'Extrema prioridade',
                  draggable: false,
                  author: 'Admin',
                  role: 'Admin',
                  lanes: [],
                  tags: [],
                  preTags:[
                    {
                      bgcolor: '#EB5A46',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#0079BF', 
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#20c997',  
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#ffc107',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#7b58bb',  
                      color: 'white',
                      title: '',
                    },
                  ]
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

let gruposU1 = {
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
                  author: 'Admin',
                  role: 'Admin',
                  lanes: [],
                  tags: [],
                  preTags:[
                    {
                      bgcolor: '#EB5A46',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#0079BF', 
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#20c997',  
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#ffc107',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#7b58bb',  
                      color: 'white',
                      title: '',
                    },
                  ]
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
                  author: 'Admin',
                  role: 'Admin',
                  lanes: [],
                  tags: [],
                  preTags:[
                    {
                      bgcolor: '#EB5A46',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#0079BF', 
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#20c997',  
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#ffc107',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#7b58bb',  
                      color: 'white',
                      title: '',
                    },
                  ]
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
                  author: 'Admin',
                  role: 'Admin',
                  lanes: [],
                  tags: [],
                  preTags:[
                    {
                      bgcolor: '#EB5A46',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#0079BF', 
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#20c997',  
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#ffc107',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#7b58bb',  
                      color: 'white',
                      title: '',
                    },
                  ]
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

let gruposU2 = {
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
                  id: 'Card2',
                  title: 'Roberto',
                  description: 'Designer',
                  label: 'Media Prioridade',
                  metadata: { sha: 'be312a1' },
                  lanes: [],
                  tags: [],
                  preTags:[
                    {
                      bgcolor: '#EB5A46',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#0079BF', 
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#20c997',  
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#ffc107',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#7b58bb',  
                      color: 'white',
                      title: '',
                    },
                  ]
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
                  author: 'Admin',
                  role: 'Admin',
                  lanes: [],
                  tags: [],
                  preTags:[
                    {
                      bgcolor: '#EB5A46',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#0079BF', 
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#20c997',  
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#ffc107',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#7b58bb',  
                      color: 'white',
                      title: '',
                    },
                  ]
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
                  author: 'Admin',
                  role: 'Admin',
                  lanes: [],
                  tags: [],
                  preTags:[
                    {
                      bgcolor: '#EB5A46',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#0079BF', 
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#20c997',  
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#ffc107',
                      color: 'white',
                      title: '',
                    },
                    {
                      bgcolor: '#7b58bb',  
                      color: 'white',
                      title: '',
                    },
                  ]
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

let eventBus: any = undefined;
const setEventBus = (handle: any) => {
  eventBus = handle;
};
export default function Quadros() {
  const [show, setShow] = useState(false);
  let [taskId, setTaskId] = useState('');
  const [authorization, setAuthorization] = useState(false);

  function OpenCardModal(data: any) {
    console.log('cliquei,', data);
    console.log('actualQuadro', actualQuadro);
    let infos = {
      actualGrupo: actualGrupo.toString(),
      actualQuadro: actualQuadro.toString(),
    };

    localStorage.setItem('actualQuadro', actualQuadro.toString());
    localStorage.setItem('actualGrupo', actualGrupo.toString());
    return (
      <>
        <Modal
          enforceFocus={false}
          show={show}
          onHide={() => {
            setShow(false);
            // localStorage.getItem('newGrupos') || JSON.stringify(grupos); //localstorage ou client
            // dados = JSON.parse(
            //   localStorage.getItem('newGrupos') || JSON.stringify(grupos)
            // );
            // setNewGrupos(dados);
            if (user == 'admin') {
              dados = JSON.parse(
                localStorage.getItem('newGrupos') || JSON.stringify(grupos) //localstorage ou client
              );
              setNewGrupos(dados);
            } 

            dados = JSON.parse(
              localStorage.getItem('newGrupos') || JSON.stringify(grupos) //localstorage ou client
            );
            setNewGrupos(dados);

            dados.grupos.map((grupo : any)=>{
              grupo.quadros.map((quadro: any) =>{
                quadro.lanes.map((lane:any)=>{
                  console.log('lastSavweane', lane)
                  lane.cards.map((card:any)=>{

                    if(card.ler != undefined){
                      console.log('card',card)
                    const found = card.ler.find((pessoa:any) => pessoa === localStorage.getItem('user') || '');
                    if(found == undefined){
                      //console.log('adnubvuadai aju', found)
                      let remover = lane.cards.filter((caard : any ) => caard.id != card.id)
                      //console.log('adnubvuadai asdasd', remover)
                      lane.cards = remover
                    }
                    
                    }
                  })
                })
              })
            })
            
            // else if (user == 'pedro') {
            //   dados = JSON.parse(
            //     localStorage.getItem('newGruposU1') || JSON.stringify(gruposU1)
            //   );
            //   setNewGrupos(dados);
            // } else if (user == 'julio') {
            //   dados = JSON.parse(
            //     localStorage.getItem('newGruposU2') || JSON.stringify(gruposU2)
            //   );
            //   setNewGrupos(dados);
            // }

          }}
          dialogClassName="modal-100w"
          aria-labelledby="example-custom-modal-styling-title"
          size="lg"
        >
          <Modal.Header
            closeButton
            style={{ borderBottom: '0', paddingBottom: '0' }}
          ></Modal.Header>
          {/* <div  style={{width: '10002 px', marginLeft:'calc(14% - 30px)'}}/> */}
          <Modal.Body>
            <TaskPanel cardId={taskId} />
          </Modal.Body>
        </Modal>
      </>
    );
  }

  const user = localStorage.getItem('user');

  let dados;

  if (localStorage.getItem('role') == 'admin') {
    if (authorization == false) {
      setAuthorization(true);
    }
  } else if (user == null) {
    window.location.href = '/login';
  }
  // dados = JSON.parse(
  //   localStorage.getItem('newGrupos') || JSON.stringify(grupos) //localstorage ou client
  // );
  
  dados = JSON.parse(
    localStorage.getItem('newGrupos') || JSON.stringify(grupos) //localstorage ou client
  );
  if (user == 'admin') {
    if (authorization == false) {
      setAuthorization(true);
    }
  }

  // if (user == 'admin') {
  //   if (authorization == false) {
  //     setAuthorization(true);
  //   }
  //   dados = JSON.parse(
  //     localStorage.getItem('newGrupos') || JSON.stringify(grupos) //localstorage ou client
  //   );
  // } else if (user == 'pedro') {
  //   dados = JSON.parse(
  //     localStorage.getItem('newGruposU1') || JSON.stringify(gruposU1)
  //   );
  // } else if (user == 'julio') {
  //   dados = JSON.parse(
  //     localStorage.getItem('newGruposU2') || JSON.stringify(gruposU2)
  //   );
  // } else {
  //   window.location.href = '/login';
  // }
  console.log('dados',dados)

  dados.grupos.map((grupo : any)=>{
    grupo.quadros.map((quadro: any) =>{
      quadro.lanes.map((lane:any)=>{
        lane.cards.map((card:any)=>{
          //console.log('card',card)
          
          if(lane.cards.ler != undefined){
            const found = card.ler.find((pessoa:any) => pessoa === localStorage.getItem('user') || '');
          if(found == undefined){
            //console.log('adnubvuadai aju', found)
            let remover = lane.cards.filter((caard : any ) => caard.id != card.id)
            //console.log('adnubvuadai asdasd', remover)
            lane.cards = remover
          }
          
          }
        })
      })
    })
  })

  const [newGrupos, setNewGrupos] = React.useState(dados);
  const [actualGrupo, setActualGrupo] = React.useState(0);
  const [actualQuadro, setActualQuadro] = React.useState(0);
  const [saving, setSaving] = React.useState(false);

  // type card = {
  //   id: any;
  //   title: string;
  //   description: string;
  //   label: string;
  //   author: string | null;
  //   role: string;
  //   lanes: never[];
  // }

  
  let card = {
    id: '',
    title: '',
    description: '',
    label: '',
    author: '',
    role: '',

    lanes: [],
  };
  const [lastCardUpdate, setLastCardUpdate] = React.useState(card);

  // const [loaded, setLoaded] = React.useState(false);

  // const [myData, setMyData] = useState(grupos);

  // useEffect(() => {
  //   const saved = localStorage.getItem("newGrupos")

  //   if (!saved) return console.log("can't load");

  //   console.log("loading")
  //   console.log(saved)

  //   setNewGrupos(JSON.parse(saved));
  // }, []);

  // useEffect(() => {
  //   console.log("salvei")
  //   localStorage.setItem("newGrupos", JSON.stringify(newGrupos));
  // }, [newGrupos]);

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
    setSaving(true);
  };

  const removeGroup = (grupoIndex: number) => {
    let updateGrupos = {
      grupos: newGrupos.grupos.filter(
        (grupo: any, index: any) => index !== grupoIndex
      ),
    };

    if (grupoIndex == actualGrupo) {
      setActualGrupo(0);
      setActualQuadro(0);
    }

    setNewGrupos(updateGrupos);
    setSaving(true);
  };

  const createQuadro = (grupoIndex: number, nome: string) => {
    let updateGrupos = newGrupos;
    updateGrupos.grupos[grupoIndex].quadros.push({
      id: updateGrupos.grupos[grupoIndex].quadros.length.toString(),
      nome: nome,
      lanes: [],
    });
    setNewGrupos(updateGrupos);
    setSaving(true);
  };

  const removeQuadro = (grupoIndex: number, quadroIndex: number) => {
    let updateGrupos = newGrupos;

    updateGrupos.grupos[grupoIndex].quadros.splice(quadroIndex, 1);

    if (quadroIndex == actualQuadro) {
      setActualQuadro(0);
    }

    setNewGrupos(updateGrupos);
    setSaving(true);
  };

  const changeBoard = (grupoIndex: number, quadroIndex: number) => {
    setActualGrupo(grupoIndex);
    setActualQuadro(quadroIndex);
  };
  
  function padTo2Digits(num : any) {
    return num.toString().padStart(2, '0');
  }
  function formatDate(date : any) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }

  const lastCardAdd = async (e: any) => {
    localStorage.setItem('lastCardId', e.id);

    console.log('card adicionado', e);
    let role = localStorage.getItem('user') == 'admin' ? 'User' : 'Admin';
    let author = localStorage.getItem('user');
    let newCard = {
      id: e.id,
      laneId: localStorage.getItem('lastLane') || '',
      title: e.title || '',
      description: e.description || '',
      label: e.label || '',
      author: author || '',
      role: `${role}`,
      lanes: [],
      tags: [],
      data: e.data || formatDate(new Date()),
      preTags:[
        {
          bgcolor: '#EB5A46',
          color: 'white',
          title: '',
        },
        {
          bgcolor: '#0079BF', 
          color: 'white',
          title: '',
        },
        {
          bgcolor: '#20c997',  
          color: 'white',
          title: '',
        },
        {
          bgcolor: '#ffc107',
          color: 'white',
          title: '',
        },
        {
          bgcolor: '#7b58bb',  
          color: 'white',
          title: '',
        },
      ],

      ler:['admin'],
      escrever:['admin'],
    };
    await localStorage.setItem('LastCard', JSON.stringify(newCard));
    setLastCardUpdate(newCard);

    console.log('novo card', newCard);
  };
  const lastUpdateCard = (e: any) => {
    //talvez não seja necessario
  };

  const changeData = async (e: any) => {
    if (e.id) return;
    let updateGrupos = newGrupos;

    if (e != null) {
      setTimeout(
        () =>
          e.lanes.map((coluna: any, indexColuna: any) => {
            coluna.cards.map((card: any, index: any) => {
              if (card.id == localStorage.lastCardId) {
                console.log(
                  'achei sa porra',
                  e.lanes[indexColuna].cards[index],
                  JSON.parse(localStorage.getItem('LastCard') || '')
                );
                e.lanes[indexColuna].cards[index] = JSON.parse(
                  localStorage.getItem('LastCard') || ''
                );
              }
            });
          }),
        10
      );
    }
    //console.log('e lanes',e)

    updateGrupos.grupos[actualGrupo].quadros[actualQuadro].lanes = e.lanes;

    await setNewGrupos(updateGrupos);
    setSaving(true);
  };

  console.log(newGrupos.grupos[actualGrupo].quadros[actualQuadro].lanes);

  // if (saving) {
  //   setSaving(false);
  //   localStorage.setItem('newGrupos', JSON.stringify(newGrupos));
  // }
  if (saving) {
    setSaving(false);
    if (user == 'admin') {
      localStorage.setItem('newGrupos', JSON.stringify(newGrupos));
    } else if (user == 'pedro') {
      localStorage.setItem('newGruposU1', JSON.stringify(newGrupos));
    } else if (user == 'julio') {
      localStorage.setItem('newGruposU2', JSON.stringify(newGrupos));
    }
  }

  let [onLoad, setLoad] = useState(false)
  let a = async ()=>{
    await setLoad(true)
  }

  if(onLoad == false){
    a()
  }
  
  return (
    <>
    {onLoad? <></> : <></>}
      <Base>
        <div
          style={{
            backgroundImage:
              'url("https://wallpapercave.com/wp/wp4676582.jpg")',
            // filter: 'blur(2px)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        />
        <nav
          style={{
            height: '56px',
            backgroundColor: '#2D4354',
            marginBottom: '15px',
            opacity: '0.95',
          }}
        >
          <Row>
            <Col
              style={{
                textAlign: 'center',
                marginTop: '14px',
                color: '#FFF',
              }}
            >
              Visão geral das etapas do{' '}
              <b>{newGrupos.grupos[actualGrupo].quadros[actualQuadro].nome}</b>
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
              opacity: '0.9',
            }}
          >
            {/* fazer um component de outros cards que entrem */}
            <div style={{ textAlign: 'center' }}>Groups</div>
            {newGrupos.grupos.map((grupo: any, i: any) => (
              <CardGrupos
                grupos={grupo}
                grupoIndex={i}
                changeBoard={changeBoard}
                removeGroup={removeGroup}
                createQuadro={createQuadro}
                removeQuadro={removeQuadro}
              />
            ))}

            <Card
              className="border-0 ilumina"
              onClick={() => {
                if (user === 'admin') {
                  createGroup(`Grupo ${newGrupos.grupos.length + 1}`);
                }
              }}
              style={{
                cursor: 'pointer',
                borderRadius: '15px',
                paddingBottom: '11px',
                marginTop: '11px',
                backgroundColor: '#FFFF',
                boxShadow: '0px 0px 15px rgba(69, 69, 69, 0.2)',
              }}
            >
              <Card.Title></Card.Title>
              <Card.Subtitle
                style={{ marginLeft: '10px' }}
                className="text-muted"
              >
                add new group
              </Card.Subtitle>
            </Card>
          </Card>

          <Col
            style={{
              backgroundColor: '#F3F3F3',
              overflowX: 'auto',
              marginRight: '40px',
              boxShadow: '0px 0px 15px rgba(69, 69, 69, 0.3)',
              scrollBehavior: 'smooth',
              opacity: '0.9',
            }}
          >
            <Board
              onLaneClick={(e: any) => localStorage.setItem('lastLane', e)}
              onCardAdd={async (e: any) => await lastCardAdd(e)}
              onCardUpdate={(e: any) => {
                console.log('card add', e);
              }}
              eventBusHandle={setEventBus}
              style={{
                height: '50rem',
                backgroundColor: '#F3F3F3',
                borderRadius: '11px',
                overflowY: 'auto',
              }}
              data={newGrupos.grupos[actualGrupo].quadros[actualQuadro]}
              draggable={authorization}
              editable={authorization}
              canAddLanes={authorization
              }
              //addCardTitle='asdsad'

              //aqui chamar a função de API
              onCardClick={async (event: any) => {
                await localStorage.setItem('CardId', event);

                setShow(true);
              }} //esse onclick apenas retorna o ID do card clicado,
              labelStyle={{ background: '#348954' }}
              //canRemoveLanes
              onDataChange={changeData}
            />
          </Col>
          <OpenCardModal />
        </Row>
      </Base>
    </>
  );
}
