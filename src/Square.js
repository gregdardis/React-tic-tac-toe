import React from 'react';

export function Square(props) {
  const squareStyle = {
    backgroundColor: props.color,
    color: props.textColor,
  }

  return (
    <button className="square" onClick={props.onClick} style={squareStyle}>
      {props.value}
    </button>
  );
}
