import React, { Component } from "react";
import Number from "./Number";

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
        <Number count={counter} />
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
