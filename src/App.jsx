import "./App.css";
import contactsData from"./contacts.json"
import { useState } from "react";


function App() {
  const [contacts,setContacts] = useState(contactsData.slice(0,5))
  console.log(contacts)
  return(
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
  <tr>
    <td>Name</td>
    <td>Image</td>
    <td>Popularity</td>
    <td>Amy</td>
    <td>Oscar</td>
  </tr>
  {contacts.map((eachContact)=>{
    return (
      <tr key={eachContact.id}>
   <td>{eachContact.name}</td>
   <td ><img id="actor-picture" src={eachContact.pictureUrl} alt="picture of actor" /></td> 
   <td>{eachContact.popularity}</td>
   <td>{eachContact.wonEmmy && <p>🏆</p>}</td>
   <td>{eachContact.wonOscar && <p>🌟</p>}</td>
      </tr>
    )
  }
  )}
</table>
      
    </div>
  );
}

export default App;
