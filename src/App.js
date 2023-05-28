import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [allContacts, setAllContacts] = useState(contacts.slice(0, 5));
  console.log(allContacts);

  const remainingContacts = contacts.slice(5, contacts.length);

  const addRandomContact = () => {
    const oneRandomIndex = Math.floor(Math.random() * remainingContacts.length);
    const oneRandomCeleb = remainingContacts[oneRandomIndex];
    setAllContacts([
      ...allContacts,
      {
        id: oneRandomCeleb.id,
        pictureUrl: oneRandomCeleb.pictureUrl,
        name: oneRandomCeleb.name,
        popularity: oneRandomCeleb.popularity,
        wonOscar: oneRandomCeleb.wonOscar,
        wonEmmy: oneRandomCeleb.wonEmmy,
      },
    ]);
  };
  const sortedByName = () => {
    const sortedContacts = [...allContacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setAllContacts(sortedContacts);
  };

  const sortedByPopularity = () => {
    const sortedContacts = [...allContacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setAllContacts(sortedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = allContacts.filter((contact) => {
      return contact.id !== id;
    });
    setAllContacts(updatedContacts);
  };

  return (
    <div className="App">
      <ul>
        <h1>
          <i> IronContacts</i>
        </h1>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortedByPopularity}>Sort by popularity</button>
        <button onClick={sortedByName}>Sort by name</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Actions</th>
            </tr>
            {allContacts.map((element) => {
              return (
                <>
                  <tr>
                    <td>
                      <img src={element.pictureUrl} alt={element.name} />
                    </td>
                    <td>{element.name}</td> <td>{element.popularity}</td>
                    <td className="oscar-icon">
                      {element.wonOscar ? "🏆" : null}
                    </td>
                    <td className="emmy-icon">
                      {element.wonEmmy ? "🌟" : null}
                    </td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteContact(element.id)}
                    >
                      Delete
                    </button>
                  </tr>
                </>
              );
            })}
          </thead>
        </table>
      </ul>
    </div>
  );
}

export default App;
