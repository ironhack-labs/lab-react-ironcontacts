// src/App.js
import './App.css';
import contacts from './contacts.json';
let contactsToDisplay = contacts.slice(0, 5);
function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contactsToDisplay.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img className="image" src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
