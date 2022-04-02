import Button from '@restart/ui/esm/Button';
import React, { Component, useState, useEffect, useRef } from 'react';
import { Card, Col,Row  } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import './style.css';

let data = {
    id:'Card 1 (por enquanto n ta na API)',
    title:'cu1',
    coluna:'Fase 1',
    description:'Oi bonitão',
    permisions:'admin',
    lanes:[
        {
            id:'1',
            user:'jose matador',
            description:'QUE FIQUE BEM CLARO DE QUE: OS COMENTARIOS SAO FEITO DE CIMA PRA BAIXO E TAMBÉM SAO ENCADEADOS. DELETA ESSE AKI PRA VER, em seguida reabra esta aba e delete so o de baixo. Sim eu sei, eu sou um deus 😎.',
            users:[], //usuarios associados se pa
        },
        {
            id:'2',
            user:'jose matador',
            description:'jose vai nao matar ninguem2',
            users:[], //usuarios associados se pa
        },
        
    ]

}

let data2 = {
    id:'Card 2',
    title:'OPA É O CARD 2',
    description:'OPA É O CARD 2',
    permisions:'user',
    lanes:[
        {
            id:'1',
            user:'admin também',
            description:'admin triste',
            users:[], //usuarios associados se pa
        },   
    ]
}

//'#D2D2D2'
export default function TaskPanel(cardID) {
  //console.log('card id',cardID)
  const [quadroNome, setQuadroNome] = useState('');
  //const [grupoNome, setGrupoNome] = useState('');
  let [id, setId] = useState('id off')
  
  
  let [permision, setPermision] = useState('')
  let [lanes, setLanes] = useState([])

  //adicionando Titulo
  let [editandoTitulo,setEditandoTitulo] = useState(false)
  let [title, setTitle] = useState('Titulo⠀')
  let [fase, setFase] = useState('')
  let [focus,setFocus] = useState(false)
  const textToFocus = useRef(null);

  //adicionando descrição 
  let [editandoDescrição,setEditandoDescrição] = useState(false)
  let [preDescrição, setPreDescrição] = useState('')
  let [ description, setDescription] = useState('')


  //adicionando lanes
  let [adicionando, setAdicionando] = useState(true)
  let [newLane, setNewLane] = useState('')

  //editando task
  let [task, setTask] = useState('')
  let [taskBack, setTaskBack] = useState('')
  let [editandoTask, setEditandoTask] = useState('-1')

  const isAdmin = localStorage.getItem('user') === 'admin';
  
  if(cardID.cardId == 'Card1'){
    if(id == 'id off'){
      setId(data.id);
      setTitle(data.title)
      setFase(data.coluna)
      setDescription(data.description)
      setPreDescrição(data.description)

    let maric = []
      data.lanes.map((lane) =>{
        lanes.push(lane)
      })

      setLanes(lanes)
  }
  }else if (cardID.cardId == 'Card2'){
    if(id == 'id off'){
      setId(data2.id);
      setTitle(data2.title)
      setFase(data2.fase)
      setDescription(data2.description)
      setPreDescrição(data2.description)
    let maric = []
      data2.lanes.map((lane) =>{
        lanes.push(lane)
      })

      setLanes(lanes)
  }
  }

  function addNewLane(data){
    
  }
  
  useEffect(()=>{
    
  }, [])

  function handleFocus(e){
      textToFocus.current.focus()
    }

  
  return (
    <>
    <div style={{marginLeft:'35px',marginRight:'30px'}}
     onClick={async (event)=> 
                          {
                            console.log('rtihs', event.target.id)
                            if(event.target.id != 'descrição'){
                              setEditandoDescrição(false)
                              setPreDescrição(description)
                            }
                            if(event.target.id != 'inputTarefa' && event.target.id != 'descriçãoText' && newLane.length == 0){
                              setAdicionando(true)
                            }
                            
                            if(event.target.id != 'title' && title.length >= 1){
                            setEditandoTitulo(false)
                          }}}>

      { !editandoTitulo ? 

        <div id='title'style={{fontSize:'1.8rem',paddingBottom:'2px'}} 
              onClick={async (event)=> {                                                                          
                                        await setEditandoTitulo(true); 
                                        await setFocus(true); 
                                        handleFocus(event.target)
                                        }}>
          {title}
        </div> 
      :    

      <input 
        style={{fontSize:'1.8rem', padding:'0px',paddingLeft:'3px', position:'relative',top:'-1px',left:'-4px'}}
        ref={textToFocus} id='titulo' class="form-control" 
        placeholder={title == 'Titulo⠀' ? '' : 'Insira o titulo'}
        value={title}
        onChange={(event) => {setTitle(event.target.value)}}
        onKeyPress={(event) => {
                    if(event.key === 'Enter' && title.length >= 1){
                      setEditandoTitulo(false)
                    }   
                    }}/>
      }

       <div hidden={!isAdmin} style={{color:'#6c757d'}}>
            <a style={{fontSize:'0.85rem', cursor: 'pointer'}}>{fase} </a>
        </div>
      <br/>
      <div style={{marginBottom:'5px',fontSize:'1.25rem'}}>
        Descrição
      </div>
      
      <div onClick={
                    async ()=>{
                      await setEditandoDescrição(true)
                    }}
           >    
      <textarea 
                // disabled={editandoDescrição} (desabilitei pq o cara so chega ai apertando tab)
                id='descrição'
                className='descrição'
                style={{padding:'5px', paddingLeft:'12px', borderRadius:'5px', border:'0', backgroundColor: (editandoDescrição ? '#ffff' : '#ebebeb'), cursor:(!editandoDescrição ? 'pointer':''), width:'100%', maxHeight:'400px'}}
                rows= '5'
                value={description}
                onChange={(event) => {setDescription(event.target.value)}}
                />  
      <div style={{marginBottom:'20px'}} hidden={!editandoDescrição}>
            <button 
                style={{fontSize:'1rem', padding:'3px'}}
                class='btn btn-secondary'
                onClick={ () => {
                    setEditandoDescrição(false);
                    setPreDescrição(description)
                }}>
              Salvar</button>

              <button 
                class='btn-close'
                style={{marginLeft:'5px', position:'relative', top:'3px'}}
                onClick={async()=>{
                  await setDescription(preDescrição)
                  setEditandoDescrição(false)
                }}
                />
          </div>
      </div>
      

      {lanes.map((data, index) =>{
        return (

          <div style={{marginBottom:'10px'}}> 
            {/* content */}      
            
            
            <div style={{color:'#495057',marginTop:'5px',marginBottom:'3px', fontWeight: 'bold', paddingLeft:'3px'}}>
              <img src='https://cdn.discordapp.com/attachments/299228773415649281/959617736403722301/-.png'
              style ={{width:'30px', height:'30px', objectFit: 'cover', borderRadius:'28px', position:'absolute',left:'13px'}}/>

              {data.user}

              <a style={{ fontWeight: 'normal', fontSize:'0.8rem', marginLeft:'10px' }}>Admin</a>
            </div>

            { editandoTask == index ?
              
              <>
                <textarea 
                    id='descrição'
                    className='descrição'
                    style={{borderColor:'#dee2e6',padding:'5px', paddingLeft:'12px', borderRadius:'5px', overflowWrap: 'break-word', width:'100%', maxHeight:'400px'}}
                    rows= '2'
                    value={task}
                    onChange={(event) => {setTask(event.target.value)}}
                    />  
              <div style={{marginBottom:'20px'}}>
                <button 
                    disabled={task.length == 0 }
                    style={{fontSize:'1rem', padding:'3px'}}
                    class='btn btn-secondary'
                    onClick={async () => {
                        setEditandoTask('-1');
                        setTaskBack('')
                        lanes[index].description = task
                        await setLanes(lanes)
                        console.log()
                    }}>
                  Salvar</button>

                  <button 
                    class='btn-close'
                    style={{marginLeft:'5px', position:'relative', top:'3px'}}
                    onClick={async()=>{
                      await setTask(taskBack)
                      setEditandoTask('-1');
                      setTaskBack('')
                    }}
                    />
              </div>
            </>
            :
            <>
            <div className='border'style={{padding:'5px', paddingLeft:'12px', borderRadius:'5px', overflowWrap: 'break-word'}}>        
              {data.description}    
            </div>
            
            <div hidden={!isAdmin} style={{marginLeft:'13px', color:'#6c757d'}}>
            <a 
            style={{fontSize:'0.8rem', cursor: 'pointer'}}
            onClick={()=>{setEditandoTask(index); setTask(data.description)}}
            >
              Editar </a>
            -
            <a 
              style={{fontSize:'0.8rem',cursor: 'pointer'}}
              onClick={async ()=>{
                lanes.splice(index);
                await setLanes(lanes);
                setNewLane('a')
                setNewLane('')
                setAdicionando(true)
              }}> Excluir</a>
            </div>

  
            </>
            }
            
        </div>
              
        )
      })}

      {/* end task */}

      {
        adicionando ?
        <a
          style={{textDecoration:'none', cursor:'pointer'}}
          id='inputTarefa'
          onClick = {async ()=> {await setAdicionando(false); handleFocus()}}>
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
          onChange={(event) => {setNewLane(event.target.value)
          
            if(newLane == 'olavo de carvalh'){
              setNewLane('💀')
            } }}
          />
      </div>
          <div>
            <button 
                style={{marginTop:'8px', fontSize:'1rem', padding:'3px'}}
                class='btn btn-secondary'
                disabled={newLane.length == 0 }
                onClick={ () => {
                    setAdicionando(true);
                    lanes.push(
                    {
                      id: '1',
                      user: 'admin também',
                      description: newLane ,
                      //usuarios associados se pa
                      //tags 
                    }
                  )
                  setNewLane('')
                }}>
              Salvar</button>

              <button 
                class='btn-close'
                style={{marginLeft:'5px', position:'relative', top:'8px'}}
                onClick={async()=>{
                  setAdicionando(true);
                  setNewLane('')
                }}
                />
          </div>
          </div>
      }
     </div>
    </>
  );
}
