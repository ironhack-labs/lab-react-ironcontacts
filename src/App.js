import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from "react";

function App() {

  let fiveContacts = contactsArr.slice(0, 5);
  console.log(fiveContacts);

  const [contacts, setContacts] = useState(fiveContacts);


  return <div className="App">
    <table>
      <thead>
        <tr>
          <th>PICTURE</th>
          <th>NAME</th>
          <th>POPULARITY</th>
          <th>OSCAR</th>
          <th>EMMY</th>
        </tr>
      </thead>
      <tbody>
        
          {fiveContacts.map((element) => {
            return (
            <tr>
                <td> <img src={element.pictureUrl} alt="picture" width="75" height="85"/> </td>
                <td> {element.name} </td>
                <td> {element.popularity} </td>
                <td> {element.wonOscar && <i class="fas fa-trophy"></i>} 
                     </td>
                <td> {element.wonEmmy && <i class="fas fa-trophy"></i> } 
                       </td>
                 
 
            </tr>
            );
          })};
        
      </tbody>
    </table>
  </div>
}
export default App;

