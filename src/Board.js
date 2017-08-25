import React from 'react';
import { Square } from './Square';

export class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
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
