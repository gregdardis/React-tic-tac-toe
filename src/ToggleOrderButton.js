import React from 'react';

export function ToggleOrderButton(props) {
  return (
    <button
      className="toggle-order-button"
      onClick={props.onClick} >
      {props.buttonText}
    </button>
  );
}
