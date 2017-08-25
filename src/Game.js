import React from 'react';
import { Board } from './Board';
import { calculateWinner } from './utils';
import { ToggleOrderButton } from './ToggleOrderButton';
import { boardIsFull } from './utils';

export class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      historyReversed: false,
    };
  }

  handleBoardClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  handleToggleButtonClick() {
    this.setState({
      historyReversed: !this.state.historyReversed
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  reverseHistoryIfRequired(moves) {
    if (this.state.historyReversed) {
      moves.reverse();
    }
  }

  setStatusBasedOnBoardState(current, winningInfo) {
    if (winningInfo) {
      return 'Winner: ' + winningInfo[0];
    } else if (boardIsFull(current.squares)) {
        return 'Its a tie!';
    } else {
      return 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const moves = history.map((step, moveIndex) => {
      const moveDescription = moveIndex ?
        'Move #' + moveIndex :
        'Game start';

        let boldFont = null;
        if (this.state.stepNumber === moveIndex) {
          boldFont = {fontWeight: 'bold'}
        }

        return (
          <li key={moveIndex} style={boldFont} >
            <a href="#" onClick={() => this.jumpTo(moveIndex)}>{moveDescription}</a>
          </li>
        );
    })

    this.reverseHistoryIfRequired(moves);

    // winningInfo has 4 elements - the first element is an X or an O, depending
    // on who won, the next 3 are the 3 winning squares
    const winningInfo = calculateWinner(current.squares);
    let status = this.setStatusBasedOnBoardState(current, winningInfo);

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winningInfo={winningInfo}
            onClick={(i) => this.handleBoardClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
        <ToggleOrderButton
          buttonText='Toggle Order'
          onClick={() => this.handleToggleButtonClick()}/>
      </div>
    );
  }
}
