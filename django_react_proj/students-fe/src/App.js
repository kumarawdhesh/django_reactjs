import React, { Component, Fragment } from "react";
import Header from "./components /Header.js";
import Home from "./components /Home.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    );
  }
}

export default App;