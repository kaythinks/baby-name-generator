import React, { Component } from "react";
import Names from "./components/names";
import { generateName } from "./utils/nameGenerator";

class App extends Component {
  render() {
    return (
      <div>
        <Names generateName={generateName} />
      </div>
    );
  }
}

export default App;
