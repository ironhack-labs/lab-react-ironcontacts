import "./App.css";
import contactsArray from "./contacts.json";
import { useState } from "react";

function App() {
  const contacts = [
    contactsArray[0],
    contactsArray[1],
    contactsArray[2],
    contactsArray[3],
    contactsArray[4],
  ];
  const [actors, setActors] = useState(contacts);

  const deleteContact = (contactId) => {
    setActors((prevActors) => {
      const newList = prevActors.filter((element) => {
        return element.id !== contactId;
      });
      return newList;
    });
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          setActors((prevActors) => {
            let randomIndex = Math.floor(Math.random() * contactsArray.length); // random index
            let randomContact = contactsArray[randomIndex]; // pick a random from whole list
            prevActors.push(randomContact); // push to newList
            prevActors = actors;
            return actors;
          });
        }}
      >
        Add random contact
      </button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
          {actors.map((actor) => {
            let wonOscar = actor.wonOscar ? <td>Oscar</td> : <td></td>;
            let wonEmmy = actor.wonEmmy ? <td>Emmy</td> : <td></td>;
            return (
              <tr key={actor.name}>
                <td>
                  <img src={actor.pictureUrl} alt={actor.name} />
                </td>
                <td>{actor.name}</td>
                <td>{actor.popularity}</td>
                {wonOscar}
                {wonEmmy}
                <td>
                  <button
                    onClick={() => {
                      deleteContact(actor.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
