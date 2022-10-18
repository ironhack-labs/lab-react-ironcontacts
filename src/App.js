import contactsArray from "./contacts.json" 
import './App.css';
import { useState } from "react";

function App() {
  const fiveContacts =contactsArray.slice(0,5);
  const [listOfContacts, setListOfContacts]= useState(fiveContacts)
  // console.log(fiveContacts)
function getRandomContact(contactsArray) {
  const randomValue = Math.floor(Math.random()* contactsArray.length)
  return contactsArray.splice(randomValue, 1)[0]
}

let sortByPopularity = ()=> {
  const newContacts = [...listOfContacts]

  newContacts.sort((a,b)=> {
    if(a.popularity > b.popularity){
      return -1;
    }
    if(a.popularity < b.popularity){
      return 1;
    }
    return 0;
  })
  setListOfContacts(newContacts)
 
}

let sortByName = ()=> {
  const newContacts = [...listOfContacts]

  newContacts.sort((a,b)=> {
    if(a.name > b.name){
      return 1;
    }
    if(a.name < b.name){
      return -1;
    }
    return 0;
  })
  setListOfContacts(newContacts)
 
}

const deleteName = (contactElemId) => {
  const newList= listOfContacts.filter ((contactElem)=> {
    return contactElem.id !== contactElemId;
  });
  setListOfContacts(newList);
}

   return (
    <div className="App">
     
      <h2>IronContacts</h2>
      <button onClick={()=>{
      setListOfContacts([...listOfContacts, getRandomContact(contactsArray)])
      }}>Add Random Contacts</button>

      <button onClick={() =>{
        sortByPopularity();
      }}>Sort by popularity</button>

      <button onClick={()=> {
        sortByName();
      }}>Sort by name</button>
   <table>
    <thead>
      <tr>
        <td><b>Picture</b></td>
        <td><b>Name</b></td>
        <td><b>Popularity</b></td>
        <td><b>Won Oscar</b></td>
        <td><b>Won Emmy</b></td>
        <td><b>Actions</b></td>
      </tr>
    
      </thead>

{listOfContacts.map((contactElem)=> {
console.log(contactElem)
  return (
    <tbody>
    <tr key= {contactElem.id}>
    <td><img style={{width:60}}src={contactElem.pictureUrl}></img></td>
      <td>{contactElem.name}</td>
      <td>{contactElem.popularity}</td>
      <td>{contactElem.wonOscar ? "🏆" : null}</td>
      <td>{contactElem.wonEmmy  ? "🏆" : null}</td>
      <td><button onClick={()=> {deleteName(contactElem.id)}}>Delete</button> </td>
    </tr>
    </tbody>
  )
})}


     </table>
    </div>

  );
}

export default App;
