import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  const [people, setPeople] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    let RandomNumber = Math.floor(Math.random() * contacts.length);
    let randomPerson = contacts[RandomNumber];
    // console.log(randomPerson);
    let updatedPeople = [...people];
    if (updatedPeople.some((listPerson) => listPerson.id === randomPerson.id)) {
      addRandomContact();
    } else {
      updatedPeople.push(randomPerson);
      setPeople(updatedPeople);
    }
    // console.log(updatedPeople);
  };

  const sortByPopularity = () => {
    let updatedPeople = [...people];
    updatedPeople.sort((a, b) => b.popularity - a.popularity);
    setPeople(updatedPeople);
  };

  const sortByName = () => {
    let updatedPeople = [...people];
    updatedPeople.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    setPeople(updatedPeople);
  };

  const deletePerson = (personId) => {
    console.log(personId);
    const filteredPeople = people.filter((person) => {
      return person.id !== personId;
    });

    setPeople(filteredPeople);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
          {people.map((person) => {
            return (
              <tr key={person.id}>
                <td>
                  <img id="actor_img" src={person.pictureUrl} />
                </td>
                <td>{person.name}</td>
                <td>{person.popularity}</td>
                <td>{person.wonOscar && <p>🏆</p>}</td>
                <td>{person.wonEmmy && <p>🌟</p>}</td>
                <td>
                  <button
                    onClick={() => deletePerson(person.id)}
                    className="btn-delete"
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
