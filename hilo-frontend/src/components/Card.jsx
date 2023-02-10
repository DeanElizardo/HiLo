import React from 'react';

export function Card({card}) {
  return <img src={`/assets/cards/${card}`} alt={"A playing card"}/>
}