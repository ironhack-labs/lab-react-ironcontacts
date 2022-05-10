import './App.css';
import contactsArr from "./contacts.json";

function App() {
  const fiveContacts = contactsArr.slice(0, 5);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {fiveContacts.map((contact)=>(
            <tr key={contact.id}>
              <td>{<img src={contact.pictureUrl} alt=""></img>}</td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
