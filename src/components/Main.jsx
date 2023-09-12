import contactsData from "../contacts.json";
import { useState } from "react";
import "./Main.css";

function Main() {
  const [contactsToDisplay, setContacts] = useState(contactsData.slice(0, 5));

  const addRandom = () => {
    const remainingContacts = contactsData.filter(
      item => !contactsToDisplay.includes(item)
    );
    if (remainingContacts.length === 0) return;

    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    const newContactArr = [randomContact, ...contactsToDisplay];

    setContacts(newContactArr);
  };

  const sortByPop = () => {
    const popSort = [...contactsToDisplay].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(popSort);
  };

  const sortByName = () => {
    const nameSort = [...contactsToDisplay].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(nameSort);
  };

  const deleteContact = (contactId) => {
    const newContacts = contactsToDisplay.filter(e => e.id !== contactId);
    setContacts(newContacts);
  };

  return (
    <div className="Main">
      <h1>IronContacts</h1>
      <button className="button" onClick={addRandom}>
        Add Random Contact
      </button>
      <button className="button" onClick={sortByPop}>
        Sort by popularity
      </button>
      <button className="button" onClick={sortByName}>
        Sort by name
      </button>
      <table>
        <tr className="table-header">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won <br /> Oscar</th>
          <th>Won <br /> Emmy</th>
          <th>Actions</th>
        </tr>
        <tbody>
          {contactsToDisplay.map((e) => {
            return (
              <tr key={e.id} className="card table-header">
                <td>
                  <img src={e.pictureUrl} />
                </td>
                <td>{e.name}</td>
                {/* convert numaric value of popularity to a string value to prevent NaN error */}
                <td>{String(Math.round(e.popularity * 100) / 100)}</td>
                <td>{e.wonOscar == true && <p>🏆</p>}</td>
                <td>{e.wonEmmy == true && <p>🌟</p>}</td>
                <button
                  className="deleteButton"
                  onClick={() => {
                    deleteContact(e.id);
                  }}
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Main;
