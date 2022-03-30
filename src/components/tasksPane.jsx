import Button from '@restart/ui/esm/Button';
import React, { Component, useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
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
            description:'jose vai nao matar ninguem',
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
  }else{
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
      <div>
        {title}
      </div>
      <br/>

      <div>
        {description}
      </div>

      {lanes.map((data) =>{
        return (

          <div className = 'border'>
            {data.user}

            <div>
              <br></br>
              
            {data.description}
         
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
        <input
        value={newLane}
        onChange={(event) => setNewLane(event.target.value)}></input>
            <button onClick={() => {
              console.log('a'); setAdicionando(true);
              lanes.push(
                {
                  id: '1',
                  user: 'admin também',
                  description: newLane ,
                  //usuarios associados se pa
                }
              )
              setNewLane('')
            }}>save</button>
          </div>

      }
     
    </>
  );
}
