import "./App.css";
import contacts from "./contacts.json";

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contacts.map((contact) => {
          return(<tr>
            <th>{contact.picture}</th>
            <th>{contact.name}</th>
            <th>{contact.popularity}</th>
          </tr>)
        })}
      </table>
    </div>
  );
}
export default App;
