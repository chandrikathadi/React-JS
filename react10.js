"use client";
import React, { Component } from 'react';

type Props = object;
type State = {
  message: string;
  count: number;
};

class ExampleComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      message: 'Hello, World!',
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default ExampleComponent;