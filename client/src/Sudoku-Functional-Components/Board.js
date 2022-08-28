import React from "react";
import Cell from "./Cell";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.board = new Array(9);
    for (let i = 0; i < 9; i++) {
      this.board[i] = new Array(9);
    }

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.board[i][j] = new Cell(0);
      }
    }
  }

  render() {
    const flatArray = this.board.flat();

    return (
      <div>
        {flatArray.map((cell, index) => (
          <div>
            {!(index % 9) ? <hr></hr> : <div></div>}
            {cell.show()}
          </div>
        ))}
        <hr></hr>
      </div>
    );
  }
}

export default Board;
