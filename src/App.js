import { useState } from 'react';
import contacts from "./contacts.json";
import './App.css';

function App() {

 //  const [contactsList, setContactsList] = useState (contacts);

  return (
    <div className="App">

      <h1>IronContacts</h1>

       <table>
        <thead>
          <tr>
            <th>
              <h4>Picture</h4>
            </th>

            <th>
              <h4>Name</h4>
            </th>

            <th>
              <h4>Popularity</h4>
            </th>

          </tr>
        </thead> 
        <tbody>
          <tr>
            <td>
              <h3>TEST</h3>
            </td>
          </tr>
        </tbody>
      </table>
        
    </div>
  );
}

export default App;
