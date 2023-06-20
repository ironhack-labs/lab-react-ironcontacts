//import logo from './logo.svg';
import './App.css';
import contactsData from "./contacts.json";
import {useState} from "react";


function App() {

  let fiveContacts=contactsData.slice(0,5);
  const [contacts, setContacts]= useState(fiveContacts);
  const randomContact =() => {
    //calculate size of the array contacts
    const sizeArray=contacts.reduce( sum => sum+1,0);
    
    //random index value
    const randomIndex=Math.floor(Math.random()*sizeArray);
    //random item
    const item=contacts[randomIndex];

    //new list with a random contact
    const newList =[...contacts];
    newList.push(contacts[item]);
  }
  

  return (
    <div className="App">
    <h1>IronContacts</h1>
    <p><button onClick={() => {randomContact(contacts.id)}}>Add Random Contact</button></p>
     <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
      </tr>
      {fiveContacts.map((element)=> (
        <tr>
        <th><img src={element.pictureUrl}/></th>
        <th>{element.name}</th>
        <th>{element.popularity}</th>
        {element.wonOscar ? <th>🏆</th>: <th></th>}
        {element.wonEmmy ? <th>🏆</th> : <th></th>}
      </tr>
      ))}
      
     </table> 
    </div>
  );
}

export default App;
