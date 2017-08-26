import React from 'react';
import { Square } from './Square';

export class Board extends React.Component {

  renderSquare(i) {
    let color;
    let textColor;
    if (this.props.winningInfo && this.props.winningInfo.includes(i)) {
      color='green';
      textColor='white';
    } else {
      color='white';
      textColor='black';
    }
    return (
      <Square
        value={this.props.squares[i]}
        color={color}
        textColor={textColor}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  // rowNumbers are zero indexed
  createRow(rowNumber) {
    const numColumns = 3;
    const row = [];

    for (let i = 0; i < numColumns; i++) {
      row.push(
        this.renderSquare(rowNumber * numColumns + i)
      );
    }
    return row;
  }

  // board rows are zero indexed
  createBoard() {
    const sideLength = 3;
    const rows = [];

    for (let i = 0; i < sideLength; i++) {
      rows.push(
        <div className="board-row">
          {this.createRow(i)}
        </div>
      );
    }
    return rows;
  }

  render() {
    return (
      <div>
        {this.createBoard()}
      </div>
    );
  }
}
