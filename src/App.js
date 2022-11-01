import contacts from "./contacts.json";
import "./App.css";
import { useState } from "react";
function App() {
  let initialPersons = contacts.slice(0, 5);
  const [list, setList] = useState(initialPersons);

  const addContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const cloneContacts = structuredClone(list);

    cloneContacts.push(randomContact);

    setList(cloneContacts);
  };

  const sortByPop = () => {
    const cloneContacts = [...list];
    cloneContacts.sort((elem1, elem2) => elem1.popularity > elem2.popularity ? -1 : 1);

    setList(cloneContacts);
  };

  const sortByName = () => {
    const cloneContacts = JSON.parse(JSON.stringify(list));
    cloneContacts.sort((elem1, elem2) => elem1.name > elem2.name ? 1 : -1);

    setList(cloneContacts);
  };

  const deleteContact = (contactId) => {
    const filteredList = list.filter((eachPerson) => eachPerson.id === contactId ? false : true);

    setList(filteredList);
  };

  return (
    <div className="App">
      <div>
        <h3>IronContacts</h3>
        <button onClick={addContact}>Add Random Contact</button>
        <button onClick={sortByPop}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          {list.map((eachPerson) => {
            return (
              <tbody key={eachPerson.id}>
                <tr>
                  <td>
                    <img
                      src={eachPerson.pictureUrl}
                      alt="picture"
                      width="80px"
                    />
                  </td>
                  <td>{eachPerson.name}</td>
                  <td>{eachPerson.popularity.toFixed(2)}</td>
                  <td>{eachPerson.wonOscar === true ? "🏆" : ""}</td>
                  <td>{eachPerson.wonEmmy === true ? "🏆" : ""}</td>
                  <td>
                    <button onClick={() => {deleteContact(eachPerson.id)}}>Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
