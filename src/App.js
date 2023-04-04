import "./App.css";
import contacts from "./contacts.json"




function App() {
  const contactsArr = contacts.slice(0, 5);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colspan="2">IronContacts</th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
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
