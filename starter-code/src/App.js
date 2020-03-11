import React from "react";
import "./App.css";
import Table from "./components/Table";
function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-title">IronContacs</h1>
        <div className="tHead">
          <p>Picture</p>
          <p className="NamePosition">Name</p>
          <p>Popularity</p>
        </div>
      </header>
      <Table></Table>
    </div>
  );
}

export default App;
