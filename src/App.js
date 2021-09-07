import React, {useState} from "react";
import "./App.css";
import Contacts from "./contacts.json";
import SortByName from "./Components/SortByName/SortByName";
import AddRandom from "./Components/AddRandom/AddRandom";

const firstFive = Contacts.slice(0, 5);
const largerArr = Contacts.slice(5);

const App = () => {
    
  return (
    <AddRandom
        firstFive={firstFive}
        largerArr={largerArr}      
    />
  );
}

export default App;