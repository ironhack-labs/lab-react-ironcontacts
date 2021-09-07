import React, {useState} from "react";
import "./App.css";
import TableRow from "./Components/TableRow/TableRow";
import Contacts from "./contacts.json";

const firstFive = Contacts.slice(0, 5);
const largerArr = Contacts.slice(5);

const App = () => {
    
  return (
    <div>
      <AddRandomContact
        firstFive={firstFive}
        largerArr={largerArr}      
      />      
    </div>    
  );
}

export default App;
