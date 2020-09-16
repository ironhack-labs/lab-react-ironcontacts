import React, {useState} from 'react';
import './App.css';
import contacts from "./contacts.json"
import TableAntD from "./components/TableAntD"
import { Button as ButtonAntD } from 'antd';

function App() {

  const [arrayContacts, setArrayContacts] = useState( [...contacts].slice(0, 5))
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  } 

  const addRandomContact = () => {
    let randomIndex = randomNumber(0, contacts.length);
    setArrayContacts([...arrayContacts, contacts[randomIndex]]);
  }

  const removeContact = (id) => {    
    let array = [...arrayContacts.filter(item => item.id !== id)]
    setArrayContacts(array);
  }

  const orderByName = () => {
    let newArray = [...arrayContacts].sort((a, b) => a.name.localeCompare(b.name));
    setArrayContacts(newArray)
  }

  const orderByPopularity = () => {
    let newArray = [...arrayContacts].sort((a, b) => b.popularity - a.popularity);
    setArrayContacts(newArray)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>  
      <ButtonAntD type="primary" onClick={addRandomContact} >Add Random Contact</ButtonAntD>&nbsp;&nbsp;&nbsp;
      <ButtonAntD type="primary" onClick={orderByName} >Order By Name</ButtonAntD>&nbsp;&nbsp;&nbsp;
      <ButtonAntD type="primary" onClick={orderByPopularity} >Order By Popularity</ButtonAntD>
      <br/><br/><br/>
      <TableAntD data={arrayContacts} onDelete={removeContact}></TableAntD>
    </div>
  );
}

export default App;
