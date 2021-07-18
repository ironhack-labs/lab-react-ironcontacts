import { Component } from "react";
import TableStructure from "../TableStructure/TableStructure";
import './App.css'

class App extends Component{
  render(){
    return (
      <>
      <div className="App">
      <h1>IronContacts</h1>
       <TableStructure/>
      </div>
      </>
    );
  }
}

export default App;
