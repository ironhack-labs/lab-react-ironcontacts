import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  //1.1 taking from the creating a getter and a setter, slicing first five contact from there using State from the import file
  const fivePeople = contactsData.slice(0, 5); //taking the first five
  const [contactsToDisplay, setContacts] = useState(fivePeople);

  // Iteration 3: make a new random contacts from the rest of the elements
  const addRandomContact = () => {
    const remainingActors = contactsData.slice(5);
    const randomActorIndex = Math.floor(Math.random() * remainingActors.length);
    const randomActor = remainingActors[randomActorIndex];
    setContacts((prevState) => [randomActor, ...prevState]);
    // console.log(remainingActors)
  };
  // iteration 4 - make function for popularity and name
  const sortByPopularity = () => {
    const byPopularity = [...contactsData].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(byPopularity);
  };

  const sortByName = () => {
    const byName = [...contactsData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(byName);
  };

  //Iteration 5
  const deleteContact = (contactId) => {
    const updatedContacts = contactsToDisplay.filter((contact) => {
      // console.log("Delete:", contactId)
      return contact.id !== contactId;
    });
    setContacts(updatedContacts);
  };
  // console.log(updatedContacts)

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      {/* Iteration 3 - trigger button for the random actor */}
      <button onClick={addRandomContact}>Add Random Contact </button>
      {/* Iteration 4 - Popularity & Name */}
      <button onClick={sortByPopularity}>Sort by popularity </button>
      <button onClick={sortByName}>Sort by name </button>

      {/*1.2 displaying the table with picture, name and popularity */}
      <div class="contactTable">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              {/* Iteration 2 */}
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody>
            {/* 1.3 Rendering here */}
            {contactsToDisplay.map((contacts, index) => (
              <tr key={index}>
                <td>
                  <img src={contacts.pictureUrl} />
                </td>
                <td>{contacts.name}</td>
                <td>{contacts.popularity}</td>
                {/* Iteration 2 */}
                <td>{contacts.wonOscar && <p>🏆</p>}</td>
                <td>{contacts.wonEmmy && <p>🏆</p>}</td>
                <td>
                  <button
                    onClick={() => deleteContact(contacts.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
