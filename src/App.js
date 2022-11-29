// src/App.js
import "./App.css";
import contacts from "./contacts.json";
import { useState } from 'react';

 const showContacts = contacts.slice(0,5);

function App() {
  //console.log(ShowContacts)
  const [contact,setContact] = useState(showContacts);
  return (
    <div className="App">
      
      <h2>IronContacts</h2>
      <table>
      <thead>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Won An Oscar</th>
    <th>Won An Emmy</th>
  </tr>
  </thead>
  <tbody>
       {contact.map(elm => 
        
        <tr key={elm.id} >
   
    <td><img src={elm.pictureUrl} alt="img" /></td>
    <td>{elm.name}</td>
    <td>{elm.popularity}</td>
    {elm.wonOscar ?<td>🏆</td>: <td></td>}
    {elm.wonEmmy ? <td>🏆</td>: <td></td>}
    </tr>
  )}
  </tbody>
</table>
      
      
    
    </div>
  );
}
export default App;
