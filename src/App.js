import './App.css';
import contactsJSON from "./contacts.json"

function App() {
  const contacts = contactsJSON.slice(0, 5)

  return (
    <div className="App">
      <h1>Ironcontacts</h1>
      <div className='table'>
      <table className='table-outside'>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </table>
      {contacts.map(contact => {
        return (

          <table className='table-inside'>
            <tr>
              <td> <img src={contact.pictureUrl} alt="Picture" /></td>
              <td>{contact.name}</td>
              <td>{(contact.popularity).toFixed(2)}</td>
            </tr>

          </table>)

      })}
</div>
    </div>
  );
}

export default App;
