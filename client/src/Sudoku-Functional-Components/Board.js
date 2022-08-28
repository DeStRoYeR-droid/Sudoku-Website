import React from "react";
import Cell from "./Cell";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.board = new Array(81);
    for (let i = 0; i < 81; i++) {
      this.board[i] = new Cell(0);
    }
  }
  render() {
    return <div>{this.board[1].show()}</div>;
  }
}

export default Board;
