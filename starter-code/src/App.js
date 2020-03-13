import React from "react";
import "./App.css";
import Table from "./components/Table";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-title">IronContacs</h1>
      </header>
      <Table />
    </div>
  );
}

export default App;
