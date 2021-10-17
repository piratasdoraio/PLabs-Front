import React from 'react';
import Board from 'react-trello';

const data = {
  lanes: [
    {
      id: 'Coluna1',
      title: 'Fase 1',
      label: '2/2',
      cards: [
        {
          id: 'Card1',
          title: 'Jose Cleitin',
          description: 'Vendedor de fruta',
          label: 'Alta prioridade',
          draggable: false,
        },
        {
          id: 'Card2',
          title: 'Roberto',
          description: 'Designer',
          label: 'Deus',
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
};

export default function quadros() {
  return (
    <>
      <Board data={data} />   
      
    </>
  );
}
