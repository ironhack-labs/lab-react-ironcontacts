import "./App.css";
import contacts from "./contacts.json";
import { useState } from 'react';


function App() {
  const [myContacts, setMyContacts] = useState([contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]);
  return (
  <div className="App">

<table>
 <thead>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
  </tr>
 </thead>
 <tbody>
  {myContacts.map(contact => {
    return (
    <tr>
      <td><img src={contact.pictureUrl} alt="Image" height={200}/></td>
      <td>{contact.name}</td>
      <td>{contact.popularity}</td>
    </tr>
    )
  })}
  
 </tbody>
</table>

</div>
  )
}

export default App;
