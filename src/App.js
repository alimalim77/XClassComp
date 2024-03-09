import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  decrement() {
    this.setState((state) => ({ count: state.count - 1 }));
  }
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
