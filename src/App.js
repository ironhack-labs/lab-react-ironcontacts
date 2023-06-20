import contactsData from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  let firstFive = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);

  // const deleteActor = (actorId) => {

  // const newList = contacts.filter((element) => {
  //   return element.id !== actorId;
  //   });

  //   setContacts(newList);

  // }

  return (
    <div className="App">
      
      <button>Add Random Contact</button>
      
      <table>

      <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>

        {contacts.map((currentElement) => {
          return (
            <>
          <tr>
            <td>
              <img className="photo" src={currentElement.pictureUrl} alt="actor" />
            </td>
            <td>
              {currentElement.name}
            </td>
            <td>
            {currentElement.popularity}
            </td>
            <td>
            {currentElement.wonOscar}
            </td>
            <td>
            {currentElement.wonEmmy}
            </td>
          </tr>
          </>
          )
        })}
       
      </table>
    


    </div>
  );
}

export default App;
