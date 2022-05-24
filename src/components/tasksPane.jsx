import Button from '@restart/ui/esm/Button';
import React, { Component, useState, useEffect, useRef } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import './style.css';
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

// let data = {
//     id:'Card 1 (por enquanto n ta na API)',
//     title:'cu1',
//     coluna:'Fase 1',
//     description:'Oi bonitão',
//     permissions:['pedro'],
//     author:'admin',
//     role:'Admin',
//     lanes:[
//         {
//             id:'1',
//             user:'jose matador',
//             role:'Admin',
//             description:'QUE FIQUE BEM CLARO DE QUE: OS COMENTARIOS SAO FEITO DE CIMA PRA BAIXO E TAMBÉM SAO ENCADEADOS. DELETA ESSE AKI PRA VER, em seguida reabra esta aba e delete so o de baixo. Sim eu sei, eu sou um deus 😎.',
//             users:[], //usuarios associados se pa
//         },
//         {
//             id:'2',
//             user:'jose matador',
//             role:'Admin',
//             description:'jose vai nao matar ninguem2',
//             users:[], //usuarios associados se pa
//         },

//     ]

// }

let data2 = {
  id: 'Card 2',
  title: 'OPA É O CARD 2',
  description: 'OPA É O CARD 2',
  permissions: ['pedro'],
  author: 'Admin',
  role: 'Admin',
  lanes: [
    {
      id: '1',
      user: 'admin também',
      role: 'Admin',
      description: 'admin triste',
      users: [], //usuarios associados se pa
      permissions: ['admin'],
      respostas: [{
        id: '1',
        user: 'admin também',
        role: 'Admin',
        description: 'resposta ao admin triste',
        permissions: ['admin']
      },
      {
        id: '1',
        user: 'admin também',
        role: 'Admin',
        description: 'resposta ao admin triste2',
        permissions: ['admin']
      }
      ]
    },
  ]
}


//'#D2D2D2'
export default function TaskPanel(infos, cardID) {

  const dados = JSON.parse(
    localStorage.getItem('newGrupos') || ''//localstorage ou client
  );


  const user = localStorage.user
  const role = localStorage.getItem('role') //alterar o metodo disso para pegar do local storage futuramente
  //console.log('card id',cardID)
  const [quadroNome, setQuadroNome] = useState('');
  //const [grupoNome, setGrupoNome] = useState('');
  let [id, setId] = useState('id off')
  let [label, setLabel] = useState('label')
  let [author, setAuthor] = useState('')
  let [permission, setPermission] = useState([])
  let [authorization, setaAuthorization] = useState(false)
  let [lanes, setLanes] = useState([])

  //adicionando Titulo
  let [editandoTitulo, setEditandoTitulo] = useState(false)
  let [title, setTitle] = useState('⠀')
  let [fase, setFase] = useState('')
  let [focus, setFocus] = useState(false)
  const textToFocus = useRef(null);

  //adicionando descrição
  let [editandoDescrição, setEditandoDescrição] = useState(false)
  let [preDescrição, setPreDescrição] = useState('')
  let [description, setDescription] = useState('')
  let [arapuca, setArapuca] = useState(false)

  //adicionando lanes
  let [adicionando, setAdicionando] = useState(true)
  let [newLane, setNewLane] = useState('')

  //editando task
  let [task, setTask] = useState('')
  let [taskBack, setTaskBack] = useState('')
  let [editandoTask, setEditandoTask] = useState('-1')
  let [elementHeight, setElementHeight] = useState('')

  //RESPOSTAS 
  let [exibirResposta, setExibirResposta] = useState(false)
  let [adicionandoResposta, setadicionandoResposta] = useState(false)
  let [newresposta, setResposta] = useState('')
  let [actualLane, setActualLane] = useState('')


  //TAGS
  let [tags, setTags] = useState([])
  let [preTags, setPreTags] = useState([])
  let [tagBugFetch, setTagBugFetch] = useState(false)
  const [showTags, setShowTags] = useState(false);
  const target = useRef(null);
  let data
  let CardId = localStorage.getItem('CardId')
  let faseName
  let faseIndex
  let cardIndex
  let faseID
  const isAdmin = localStorage.getItem('user') === 'admin';

  dados.grupos[localStorage.getItem('actualGrupo')].quadros[localStorage.getItem('actualQuadro')].lanes.map((coluna, indexCol) => {
    coluna.cards.map((a, index) => {
      if (a.id == CardId) {
        faseName = coluna.title
        data = a
        faseIndex = indexCol
        faseID = coluna.id
        cardIndex = index
      }
    })

    // if(coluna.id == localStorage.getItem('lastLane')){
    //   coluna.cards.map((card) =>{
    //     if (card.id == CardId){
    //       data = card
    //     }
    //   })
    // }
  })

  // console.log('data', data)

  // permission.push('admin')
  // if (data.permissions.length == 0){
  //   setaAuthorization(true)
  // }else {
  //   data.permissions.map((e)=>{
  //     if(user == e || user == 'admin'){
  //       setaAuthorization(true)
  //     }
  //   })
  // }
  if (title == '⠀') {
    //console.log('card',data)
    if (role == 'admin' || user == data.author) {
      // console.log('permitido liberaco cu ')
      setaAuthorization(true)
    }
    setAuthor(data.author)
    setLabel(data.label)
    setId(data.id);

    if (data.title == '') {
      setTitle('Titulo⠀')
    } else {
      setTitle(data.title)
    }
    setFase(data.coluna)
    setDescription(data.description)
    setPreDescrição(data.description)
    if (data.lanes != undefined) {
      if (data.lanes.length != 0) {
        data.lanes.map((lane) => {
          lanes.push(lane)
        })
      }
    }
    setTags(data.tags)
    setPreTags(data.preTags)
    setLanes(lanes)
  }


  // }else if (cardID.cardId == 'Card2'){
  //   if(id == 'id off'){
  //     setId(data2.id);
  //     setTitle(data2.title)
  //     setFase(data2.fase)
  //     setDescription(data2.description)
  //     setPreDescrição(data2.description)
  //   let maric = []
  //     data2.lanes.map((lane) =>{
  //       lanes.push(lane)
  //     })

  //     setLanes(lanes)
  // }
  // }

  function addNewLane(data) {

  }

  useEffect(() => {

  }, [])

  function handleFocus(e) {
    textToFocus.current.focus()
  }

  async function salvar() {
    // console.log('salvar',faseIndex,dados.grupos[localStorage.getItem('actualGrupo')].quadros[localStorage.getItem('actualQuadro')].lanes[faseIndex].cards[cardIndex])
    console.log(tags, preTags)
    //let tags = []
    // if (CardId == 'Card1') {
    //   console.log('SADASDASDASDAS')
    //   tags = [{
    //     bgcolor: '#EB5A46',
    //     color: 'white',
    //     title: 'Atrasado'
    //   },
    //   {
    //     bgcolor: '#0079BF',
    //     color: 'white',
    //     title: 'Pedro'
    //   },]
    // }
    const newCard = {
      author: author,
      description: description,
      draggable: false,
      id: CardId,
      laneId: faseID,
      title: title,
      lanes: lanes,
      role: 'Admin',
      tags: tags,
      preTags: preTags,
    }
    dados.grupos[localStorage.getItem('actualGrupo')].quadros[localStorage.getItem('actualQuadro')].lanes[faseIndex].cards[cardIndex] = newCard
    let newGrupos = dados
    await localStorage.setItem('newGrupos', JSON.stringify(newGrupos));
  }

  const popover = (
    <Popover id="popover-basic" sanitize={false}>
      <Popover.Header as="h3" className='center' sanitize={false} >
        Tags
        <a style={{ marginLeft: '80%', fontSize: '1.2rem', color: 'gray', cursor: 'pointer' }} onClick={() => document.getElementById('popover-basic').hidden = true}>x</a>
      </Popover.Header>
      <Popover.Body sanitize={false}>
        {preTags.map((preTag, index) => {

          return (
            <>
            
            <Row>
              <Col xs={8}>
                <div
                  onClick={async () => {
                    if (document.getElementById('color' + index).disabled == true) {
                      const adicionar = tags.find(tag => tag.bgcolor === preTag.bgcolor)

                      if (adicionar == undefined) { //adicionar uma nova tag
                        console.log('contem', adicionar)
                        tags.push({
                          bgcolor: preTag.bgcolor,
                          color: 'white',
                          title: preTag.title
                        })
                        setTags(tags)
                        await setTagBugFetch(true)
                        await setTagBugFetch(false)
                        

                      }else{ //remover tags
                        let remover = tags.filter(tag => tag.bgcolor != preTag.bgcolor)
                        tags = remover
                        setTags(tags)
                        await setTagBugFetch(true)
                        await setTagBugFetch(false)
                      }
                    }
                  }}>

                  <input id={'color' + index}
                    ref={textToFocus}
                    disabled={true}
                    placeholder={preTag.title}
                    style={{ backgroundColor: preTag.bgcolor, border: 0, margin: '3px', borderRadius: '5px', paddingLeft: '10px', color: '#fff', fontSize: '1.1rem', width: '200px',
                    cursor: document.getElementById('color' + index).disabled ? 'pointer' : ''}}
                  >
                  </input>
                </div>
              </Col>
              <Col xs={4} style={{ position: 'relative', left: '15px' }}>

                <button style={{ border: 0, fontSize: '1.1rem' }} className='btn'
                  id={'botaoEditar' + index}
                  onClick={async () => {
                    document.getElementById("color" + index).value = preTag.title;
                    document.getElementById('color' + index).disabled = false;
                    handleFocus()

                    document.getElementById('botaoSalvar' + index).hidden = false;
                    document.getElementById('botaoEditar' + index).hidden = true;

                    await setTagBugFetch(true)
                    await setTagBugFetch(false)
                  }}>
                  ✏
                </button>

                <button style={{ border: 0, fontSize: '1.1rem' }} className='btn'
                  hidden={true}
                  id={'botaoSalvar' + index}
                  onClick={async () => {
                    preTag.title = document.getElementById("color" + index).value
                    document.getElementById('color' + index).disabled = true;
                    document.getElementById('botaoEditar' + index).hidden = false;
                    document.getElementById('botaoSalvar' + index).hidden = true;

                    await setTagBugFetch(true)
                    await setTagBugFetch(false)

                  }}>
                  save
                </button>
                {
                  <div
                  style={{position:'relative', top:'-35px',left:'-200px', height:'5px'}}>
                    ✔
                  </div>

                }
                
              </Col>
            </Row>
            
            </>)
        })}
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <div style={{ marginLeft: '35px', marginRight: '30px' }}
        onClick={async (event) => {
          console.log('rtihs', event.target.id)
          if (event.target.id != 'descrição') {
            setEditandoDescrição(false)
            setPreDescrição(description)
          }

          if (event.target.id != 'inputTarefa' && event.target.id != 'descriçãoText' && newLane.length == 0) {
            setAdicionando(true)
          }

          if (event.target.id != 'title' && title.length >= 1) {
            setEditandoTitulo(false)
            salvar()

          }
        }}>

        {!editandoTitulo ?

          <div id='title' style={{ fontSize: '1.8rem', paddingBottom: '2px' }}
            onClick={async (event) => {
              if (authorization) {
                await setEditandoTitulo(true);
                await setFocus(true);
                handleFocus(event.target)
              }
            }}>
            {title}
          </div>
          :
          <input
            style={{ fontSize: '1.8rem', padding: '0px', paddingLeft: '3px', position: 'relative', top: '-1px', left: '-4px' }}
            ref={textToFocus} id='titulo' class="form-control"
            placeholder={title == 'Titulo⠀' ? '⠀' : 'Insira o titulo'}
            value={title}
            onChange={(event) => { setTitle(event.target.value) }}
            onKeyPress={(event) => {
              if (event.key === 'Enter' && title.length >= 1) {
                setEditandoTitulo(false)
                salvar()
              }
            }} />
        }


        <div hidden={!isAdmin} style={{ color: '#6c757d' }}>
          <a style={{ fontSize: '0.85rem', cursor: 'pointer' }}>{faseName} </a>
        </div>

        {/* TAGS */}
        <br />
        {tagBugFetch ? <></> : <></>}
        <div>
          <div style={{ marginBottom: '5px', fontSize: '0.9rem' }}>
            Tags
          </div>
          <div style={{ maxHeight: '30px' }}>
            <Row style={{ marginLeft: '0px' }}>
              {tags.map((tag, index) => {
                console.log('tag', tag)
                return (
                  <>

                    <div
                      id={'tag' + index}
                      disabled={true}
                      style={{ backgroundColor: tag.bgcolor, fontSize: '1rem', color: '#FFFF', borderRadius: '5px', width: 'fit-content', marginLeft: '3px' }}>
                      {tag.title}
                    </div>

                  </>
                )
              })}
              <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <button style={{ backgroundColor: '#adb5bd73', color: "#495057", border: 0, borderRadius: '5px', width: 'fit-content', marginLeft: '3px' }} className='ilumina' onClick>+</button>
              </OverlayTrigger>
            </Row>
          </div>
        </div>

        <br />
        <div style={{ marginBottom: '5px', fontSize: '1.25rem' }}>
          Descrição
        </div>

        <div onClick={
          async () => {
            if (authorization) {
              await setEditandoDescrição(true)
            }
          }}
        >
          <textarea
            // disabled={editandoDescrição} (desabilitei pq o cara so chega ai apertando tab)
            id='descrição'
            className='descrição'
            style={{ color: '#000000', padding: '5px', paddingLeft: '12px', borderRadius: '5px', border: '0', backgroundColor: (editandoDescrição ? '#ffff' : '#ebebeb'), cursor: (!editandoDescrição && authorization ? 'pointer' : ''), width: '100%', maxHeight: '400px' }}
            rows='3'
            value={description}
            onChange={(event) => { setDescription(event.target.value) }}
            disabled={!authorization}
          />
          <div style={{ marginBottom: '20px' }} hidden={!editandoDescrição}>
            <button
              style={{ fontSize: '1rem', padding: '3px' }}
              class='btn btn-secondary'
              onClick={() => {
                setEditandoDescrição(false);
                setPreDescrição(description)
              }}>
              Salvar</button>

            <button
              class='btn-close'
              style={{ marginLeft: '5px', position: 'relative', top: '3px' }}
              onClick={async () => {
                await setDescription(preDescrição)
                setEditandoDescrição(false)
                salvar()

              }}
            />
          </div>
        </div>

        <div style={{ marginTop: '25px', marginBottom: '16px', fontSize: '1.25rem' }}>
          Atividades
        </div>
        {lanes.map((data, index) => {
          return (

            <div style={{ marginBottom: '23px' }}>
              {/* content */}


              <div style={{ color: '#495057', marginTop: '5px', marginBottom: '3px', fontWeight: 'bold', paddingLeft: '3px' }}>
                <img src='http://diegocarmona.com.br/wp-content/uploads/sites/19/2017/02/Saiba-o-que-%C3%A9-empres%C3%A1rio-individual.jpg'
                  style={{ width: '30px', height: '30px', objectFit: 'cover', borderRadius: '28px', position: 'absolute', left: '13px' }} />

                {data.user}

                <a style={{ fontWeight: 'normal', fontSize: '0.8rem', marginLeft: '10px' }}>{data.role}</a>
              </div>

              {editandoTask == index ?

                <>
                  <textarea
                    className='descrição'
                    style={{ padding: '5px', paddingLeft: '12px', borderRadius: '5px', width: '100%', height: elementHeight, maxHeight: '260px' }}
                    ref={textToFocus}
                    value={task}
                    onChange={(event) => {
                      setTask(event.target.value)
                      if (task == 'olavo de carvalh') {
                        setTask('💀')
                      }
                    }}
                  />
                  <div style={{ marginBottom: '20px' }}>
                    <button
                      disabled={task.length == 0}
                      style={{ fontSize: '1rem', padding: '3px' }}
                      class='btn btn-secondary'
                      onClick={async (event) => {
                        setEditandoTask('-1');
                        setTaskBack('')
                        lanes[index].description = task

                        await setLanes(lanes)

                      }}>
                      Salvar</button>

                    <button
                      class='btn-close'
                      style={{ marginLeft: '5px', position: 'relative', top: '3px' }}
                      onClick={async () => {
                        await setTask(taskBack)
                        salvar()
                        setEditandoTask('-1');
                        setTaskBack('')
                      }}
                    />
                  </div>
                </>
                :
                <>
                  <div className='border' id={'task' + index} style={{ padding: '5px', paddingLeft: '12px', borderRadius: '5px', overflowWrap: 'break-word' }}>
                    {data.description}
                  </div>

                  <div hidden={!authorization} style={{ marginLeft: '13px', color: '#6c757d' }}>


                    <a
                      style={{ fontSize: '0.8rem', cursor: 'pointer' }}
                      onClick={async () => {
                        await setElementHeight(document.getElementById('task' + index).offsetHeight)
                        await setEditandoTask(index);
                        setTask(data.description);
                        handleFocus();
                      }}
                    >
                      Editar </a>
                    -
                    <a
                      style={{ fontSize: '0.8rem', cursor: 'pointer' }}
                      onClick={async () => {
                        lanes.splice(index); //splice remove tudo, usar filter futuramente
                        await setLanes(lanes);
                        salvar()
                        setNewLane('a')
                        setNewLane('')
                        setAdicionando(true)
                      }}> Excluir</a>


                  </div>

                  {/* RESPOSTAS */}
                  <div >
                    {
                      data.respostas.map((resposta, index) => {
                        return (
                          <>
                            {/* default era 30 e 67px */}
                            <div style={{ marginLeft: '25px', fontSize: '0.8rem' }} id={'respostas' + index} >
                              <div class='vl' style={{ borderLeft: '4px solid #adb5bd', height: '59px', position: 'absolute', left: '65px' }}></div>
                              <div style={{ color: '#495057', marginTop: '5px', marginBottom: '3px', fontWeight: 'bold' }}>
                                {resposta.user}
                                <a style={{ fontWeight: 'normal', fontSize: '0.8rem', marginLeft: '10px' }}>{data.role}</a>
                                <a
                                  style={{ cursor: 'pointer', fontWeight: 'normal' }}
                                  onClick={async () => {
                                    await data.respostas.splice(index); //splice remove tudo, usar filter futuramente
                                    await setLanes(lanes);
                                    salvar()
                                    setNewLane('a')
                                    setNewLane('')
                                    setAdicionando(true)
                                  }}> - Excluir</a>
                              </div>

                              <div className='border' style={{ padding: '5px', paddingLeft: '12px', borderRadius: '5px', overflowWrap: 'break-word' }}>
                                {resposta.description}
                              </div>


                            </div>

                          </>
                        )

                      })
                    }

                    <div id={'lane' + index} style={{ marginLeft: '25px', marginTop: '10px', fontSize: '0.8rem' }} hidden={!adicionandoResposta}>
                      <div class='vl' style={{ borderLeft: '4px solid #adb5bd', height: '74px', position: 'absolute', left: '65px' }}></div>
                      <div class="form-group">
                        <input
                          id={'descriçãoTexto' + index}
                          ref={textToFocus}
                          placeholder="Insira sua resposta"
                          class="form-control"
                          value={newresposta}
                          onChange={(event) => {
                            setResposta(event.target.value)
                          }}
                        />
                      </div>
                      <div>
                        <button
                          style={{ marginTop: '8px', fontSize: '0.8rem', padding: '3px' }}
                          class='btn btn-secondary'
                          disabled={newresposta.length == 0}
                          onClick={async () => {
                            //await setadicionandoResposta(false);
                            document.getElementById("lane" + index).hidden = true
                            data.respostas.push(
                              {
                                id: data.respostas.length + 1,
                                user: user,
                                role: role,
                                description: newresposta,
                              }
                            )
                            await setResposta('')
                          }}>
                          Enviar</button>

                        <button
                          class='btn-close'
                          style={{ marginLeft: '5px', position: 'relative', top: '8px' }}
                          onClick={async () => {
                            //setadicionandoResposta(false);
                            document.getElementById("lane" + index).hidden = true
                            setResposta('')
                          }}
                        />
                      </div>
                    </div>
                    <a
                      style={{ fontSize: '0.8rem', cursor: 'pointer', marginLeft: '13px', paddingTop: '10px', color: '#adb5b', color: '#6c757d' }}
                      onClick={async () => { document.getElementById("lane" + index).hidden = false; handleFocus(); }}>
                      Responder ({data.respostas.length})</a>
                  </div>

                </>
              }

            </div>

          )
        })}

        {/* end task */}
        <div style={{ marginTop: '15px' }} hidden={!authorization}>
          {
            adicionando ?
              <a
                style={{ textDecoration: 'none', cursor: 'pointer' }}
                id='inputTarefa'
                onClick={async () => { await setAdicionando(false); handleFocus() }}>
                adicionar</a>

              :

              <div>
                <div class="form-group">
                  <textarea
                    id='descriçãoText'
                    ref={textToFocus}
                    placeholder="Descreva a nova tarefa."
                    class="form-control"
                    rows="2"
                    value={newLane}
                    onChange={(event) => {
                      setNewLane(event.target.value)

                      if (newLane == 'olavo de carvalh') {
                        setNewLane('💀')
                      }
                    }}
                  />
                </div>
                <div>
                  <button
                    style={{ marginTop: '8px', fontSize: '1rem', padding: '3px' }}
                    class='btn btn-secondary'
                    disabled={newLane.length == 0}
                    onClick={() => {
                      setAdicionando(true);
                      lanes.push(
                        {
                          id: lanes.length + 1,
                          user: user,
                          role: role,
                          description: newLane,
                          respostas: []
                          //usuarios associados se pa
                          //tags
                        }
                      )
                      setNewLane('')
                    }}>
                    Enviar</button>

                  <button
                    class='btn-close'
                    style={{ marginLeft: '5px', position: 'relative', top: '8px' }}
                    onClick={async () => {
                      setAdicionando(true);
                      setNewLane('')
                    }}
                  />
                </div>
              </div>
          }
        </div>
      </div>
    </>
  );
}
