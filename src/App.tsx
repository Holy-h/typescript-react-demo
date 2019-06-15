import React, { Component } from "react";
import Number from "./Number";
import { Form, Input } from "./Input";

interface IState {
  counter: number;
  name: string;
}
class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: ""
  };
  render() {
    const { counter, name } = this.state;
    return (
      <>
        <Form onSubmit={this.onSubmitForm}>
          <Input value={name} onChange={this.onInputChange} />
        </Form>
        <Number count={counter} />
        <button onClick={this.add}>Add</button>
      </>
    );
  }

  onInputChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("엔터");
  };

  add = (): void => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  };
}

export default App;
