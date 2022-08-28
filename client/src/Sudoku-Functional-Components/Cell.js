import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.value = props.value < 10 && props.value ? props.value : 0;
  }
  show() {
    return <div>{this.value}</div>;
  }
  render() {
    return <div>{this.value}</div>;
  }
}
