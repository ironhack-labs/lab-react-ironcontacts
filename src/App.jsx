import "./App.css";
import TableRow from "./components/TableRow";
import contacts from "./contacts.json";
import React, { useState , useEffect } from "react";

function App() {
  const [rows, setRows] = useState([...contacts].slice(0,5));

  useEffect(() => {}, [rows]);

  function addRow (){
    let rest = [...contacts].slice(6, contacts.length);
    let randomContact = rest[Math.floor(Math.random() * contacts.length-5)];
    let rowsCopy = [...rows];
    let check = rowsCopy.find(c => c.id === randomContact.id); // is the record in the array?
    if(check===undefined){ // the record has not been found in the array
      let newRows = [...rowsCopy, randomContact];
      setRows(newRows);
    }
  }

  function sortByPopularity(){
    const rowsCopy = [...rows];
    let mostPopular = rowsCopy.sort(function(a, b) {return b.popularity - a.popularity;});
    setRows(mostPopular);
  }

  function sortAlphabetically(){
    const rowsCopy = [...rows];
    let alphabetically = rowsCopy.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setRows(alphabetically);
  }

  const deleteFromContacts = (id) => {
    const rowsCopy = [...rows];
    let indexi = 0;
    const rowIdDel = rowsCopy.map((row, index)=>{
      if(row.id===id){
        indexi = index;
      }
    });
    rowsCopy.splice(indexi, 1);
    setRows(rowsCopy);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRow}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortAlphabetically}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won<br/>Oscar</td>
            <td>Won<br/>Emmy</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {rows.map(row=>(
            <TableRow key={row.id} contact={row} deleteFromContacts={deleteFromContacts}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
