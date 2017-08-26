import React from 'react';

export function Square(props) {
  return (
    <button className="square" onClick={props.onClick} style={{backgroundColor: props.color}}>
      {props.value}
    </button>
  );
}
