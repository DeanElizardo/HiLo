import React from 'react';

export function Card({card}) {
  return (
    <div className='card'>
      <img 
      src={`/assets/cards/${card}`} 
      alt={"A playing card"}
      />
    </div>
  )
}