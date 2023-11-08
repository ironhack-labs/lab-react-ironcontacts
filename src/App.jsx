import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {

  const [contactArr, setContactArr] = useState(contacts);
  const ArrLength = contactArr.length;
  const [randomContact,setRandomContact] = useState(contactArr[Math.floor(Math.random() * (ArrLength - 5 + 1)) + 5]);

  

  const addContact = () =>{
    return(
      <tr key = {randomContact.id}>
        <td><img src={randomContact.pictureUrl}/></td>
        <td>{randomContact.name}</td>
        <td>{randomContact.popularity}</td>
        {randomContact.wonOscar ? <td><i className="fa fa-trophy" style={{fontSize:'24px',color:'#F3B664'}}/></td> : <td></td>}
        {randomContact.wonEmmy ? <td><i className="fa fa-star" style={{fontSize:'24px',color:'#F3B664'}}/></td> : <td></td>}
      </tr>
    )
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick = {addContact}>Add Random Contact</button>
      <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {
          contactArr.slice(0,5).map((contact)=>{
            return(
              <tr key = {contact.id}>
                <td><img src={contact.pictureUrl}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {contact.wonOscar ? <td><i className="fa fa-trophy" style={{fontSize:'24px',color:'#F3B664'}}/></td> : <td></td>}
                {contact.wonEmmy ? <td><i className="fa fa-star" style={{fontSize:'24px',color:'#F3B664'}}/></td> : <td></td>}
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;
