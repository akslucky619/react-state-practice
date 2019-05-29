import React, { Component } from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  updateCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.updateCount()}>+</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
