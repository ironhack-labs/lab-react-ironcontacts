import './App.css';
import contactsArr from "./contacts.json";

function App() {
  const fiveContacts = contactsArr.slice(0, 5);
  console.log(fiveContacts)
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {fiveContacts.map((contact)=>(
            <tr key={contact.id}>
              <td>{<img src={contact.pictureUrl} alt=""></img>}</td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar === false ? '' :<span>🏆</span>}</td>
              <td>{contact.wonEmmy === false ? '' :<span>🏆</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
