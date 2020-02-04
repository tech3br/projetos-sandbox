import React, { Component } from "react";
import { Container } from "./styles.js";

class MyLabel extends Component {
  render() {
    return <p>{this.props.text}</p>;
  }
}

class MeuBotao extends Component {
  render() {
    return <button>Clique aqui</button>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <MyLabel id="MyLabel" text="olá mundo!" />
          <MeuBotao />
        </Container>
      </div>
    );
  }
}

export default App;
