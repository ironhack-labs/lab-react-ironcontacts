import './App.css';
import data from "./contacts.json";
import { useState } from 'react';


function App() {

  let firstFive = data.slice(0, 5)
  const [contacts, setContacts] = useState(firstFive);
  return (
    <div className="App">

{/* First, randomly select a contact from the array of remaining contacts. Then add that contact to the array that lives in your state */}

    <button>Random Celebs</button>

      <div>
      <table>
  <tr>
    <th>Photo</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Oscar</th>
    <th>Emmy</th>
  </tr>
    {contacts.map((oneContact)=> {
      return (
    <>
     <tr>
      <td><img src={oneContact.pictureUrl} alt="headshot"/></td>
      <td>{oneContact.name}</td>
      <td>{oneContact.popularity}</td>
      {oneContact.wonOscar ? <td>🏆</td> : <td></td>}
      {oneContact.wonEmmy ? <td>🏆</td> : <td></td>}
      </tr>
    </>
    )}
 )}
</table>


      </div>



    </div>
  );
}

export default App;
