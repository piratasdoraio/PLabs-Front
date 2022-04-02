import Button from '@restart/ui/esm/Button';
import React, { Component, useState, useEffect } from 'react';
import { Card, Col,Row  } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import './style.css';

let data = {
    id:'Card 1 (por enquanto n ta na API)',
    title:'cu1',
    description:'XD XD',
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
  console.log('card id',cardID)
  const [quadroNome, setQuadroNome] = useState('');
  //const [grupoNome, setGrupoNome] = useState('');
  let [id, setId] = useState('id off')
  let [title, setTitle] = useState('title off')
  let [ description, setDescription] = useState('off description')
  let [permision, setPermision] =useState('')
  let [lanes, setLanes] = useState([])

  //adicionando lanes
  let [adicionando, setAdicionando] = useState(true)
  let [newLane, setNewLane] = useState('')

  const isAdmin = localStorage.getItem('user') === 'admin';
  
  if(cardID.cardId == 'Card1'){
    if(id == 'id off'){
      setId(data.id);
      setTitle(data.title)
      setDescription(data.description)

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
      setDescription(data2.description)

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

  })
  return (
    <>
    <div style={{marginLeft:'35px',marginRight:'30px'}}>
      <div style={{fontSize:'1.8rem'}}>
        {title}
      </div>
      <br/>
      <div style={{marginBottom:'5px',fontSize:'1.28rem'}}>
        Descrição
      </div>
      <div style={{marginBottom:'15px', marginLeft:'15px'}}>
        {description}
      </div>

      {lanes.map((data, index) =>{
        console.log(index)
        return (

          <div style={{marginBottom:'10px'}}> 
            {/* content */}      
            
            
            <div style={{color:'#495057',marginTop:'5px',marginBottom:'3px', fontWeight: 'bold', paddingLeft:'3px'}}>
              <img src='https://cdn.discordapp.com/attachments/299228773415649281/959617736403722301/-.png'
              style ={{width:'30px', height:'30px', objectFit: 'cover', borderRadius:'28px', position:'absolute',left:'13px'}}/>

              {data.user}

              <a style={{ fontWeight: 'normal', fontSize:'0.8rem', marginLeft:'10px' }}>Admin</a>
            </div>

            <div className='border'style={{padding:'5px', paddingLeft:'12px', borderRadius:'5px'}}>        
              {data.description}    
            </div>

            <div hidden={!isAdmin} style={{marginLeft:'13px', color:'#6c757d'}}>
            <a style={{fontSize:'0.8rem', cursor: 'pointer'}}>Editar </a>
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

          </div>       
        )
      })}
      {
        adicionando ?
        <a
        style={{textDecoration:'none', cursor:'pointer'}}
        onClick = {()=> setAdicionando(false)}>
          adicionar</a> 

        :

        <div>
        <div class="form-group">
          <textarea 
          placeholder="Descreva a nova tarefa." 
          class="form-control" 
          rows="2"
          value={newLane}
          onChange={(event) => setNewLane(event.target.value)}
          />
      </div>
            <button 
                style={{marginTop:'8px'}}
                class='btn btn-secondary'
                disabled={newLane.length == 0 }
                onClick={() => {
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
                style={{marginLeft:'5px'}}
                onClick={async()=>{
                  setAdicionando(true);
                  setNewLane('')
                }}
                />
          </div>
      }
     </div>
    </>
  );
}
