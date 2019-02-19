import React, { Component } from "react";
import ContactIndex from "./ContactIndex.js";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Imdb</h1>
        </header>
        <Container>
          <Row>
            <ContactIndex />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
