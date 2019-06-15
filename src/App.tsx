import React, { Component } from "react";

interface IState {
  counter: number;
}
class App extends Component<{}, IState> {
  state = {
    counter: 0
  };
  render() {
    const { counter } = this.state;
    return (
      <>
        <div>{counter}</div>
        <button onClick={this.add}>Add</button>
      </>
    );
  }
  add = (): void => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  };
}

export default App;
