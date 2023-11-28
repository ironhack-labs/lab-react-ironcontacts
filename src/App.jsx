import { useState } from 'react';
import './App.css';
import contactsArray from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(contactsArray.slice(0, 5));
  const otherCelebs = contactsArray.slice(5);

  const handleButtonclick = () => {
    const randomIndex = Math.floor(Math.random() * contactsArray.length);
    const randomCeleb = otherCelebs[randomIndex];
    setContacts([...contacts, randomCeleb]);
  };

  const handleSortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };

  const handleSortByRate = () => {
    const sortedRate = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedRate);
  };

  const handleDelete = (id) => {
    const deleteContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(deleteContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={handleButtonclick} className="button_add">
        Add Random Contact
      </button>
      <button onClick={handleSortByName} className="button_add">
        Sort By Name
      </button>
      <button onClick={handleSortByRate} className="button_add">
        Sort By Popularity
      </button>
      <table>
        <thead>
          <tr>
            <th className="table-cells">Pic</th>
            <th className="table-cells">Name</th>
            <th className="table-cells">Popularity</th>
            <th className="table-cells">Won an Oscar</th>
            <th className="table-cells">Won an Emmy</th>
            <th className="table-cells">Remove Celebrity</th>
          </tr>
        </thead>

        {contacts.map((contact) => {
          return (
            <tbody key={contact.id}>
              <tr>
                <td>
                  <img className="celeb_pic" src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td className="table-cells">{contact.name}</td>
                <td className="table-cells">{contact.popularity.toFixed(1)}</td>
                <td className="table-cells">{contact.wonOscar && <p>🏆</p>}</td>
                <td className="table-cells"> {contact.wonEmmy && <p> 🌟</p>}</td>
                <td className="table-cells">
                  <button onClick={() => handleDelete(contact.id)} className="button_add">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
