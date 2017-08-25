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

  render() {
    var gridTopRow = [];
    for (var i = 0; i < 3; i++) {
      gridTopRow.push(this.renderSquare(i));
    }

    var gridMiddleRow = [];
    for (var i = 3; i < 6; i++) {
      gridMiddleRow.push(this.renderSquare(i));
    }

    var gridBottomRow = [];
    for (var i = 6; i < 9; i++) {
      gridBottomRow.push(this.renderSquare(i));
    }

    return (
      <div>
        <div className="board-row">
          {gridTopRow}
        </div>
        <div className="board-row">
          {gridMiddleRow}
        </div>
        <div className="board-row">
          {gridBottomRow}
        </div>
      </div>
    );
  }
}
