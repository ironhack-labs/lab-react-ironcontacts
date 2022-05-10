
import './App.css';
import contactsArr from "./contacts.json";
import {useState} from "react";



function App() {

  let fiveContacts = contactsArr.splice(0, 5)

  const [contacts, setContacts] = useState(fiveContacts)
  
      return(
        <div className="App">
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>

          {contacts.map((props) => {
            return (
            <tr>
            <td className="pictureUrl"> 
              <img src={props.pictureUrl}></img>
            </td>
            <td className="name">{props.name}</td>
            <td className="popularity">{props.popularity}</td>
          </tr>
          )
          })}
          
        </table>
        </div>
      )
    }



export default App;
