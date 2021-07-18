import { Component } from "react";
import TableStructure from "./Components/TableStructure";

class App extends Component{
  render(){
    return (
      <>
      <h1>IronContacts</h1>
      <div className="App">
       <TableStructure/>
      </div>
      </>
    );
  }
}

export default App;
