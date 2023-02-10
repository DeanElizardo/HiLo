import React from 'react';

export function Card({card, onClick}) {
  return <img src={`/assets/cards/${card}`} alt={"A playing card"} onClick={onClick}/>
}