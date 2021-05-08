import "./App.css";
import contacts from "./contacts.json";

const firstFiveContacts = contacts.slice(0, 5);

function addNew() {}

function App() {
  return (
    <div className="App">
      <p>Ironcontacts</p>
      <table>
        <tr>
          <th>PICTURE</th>
          <th>NAME</th>
          <th>POPULARITY</th>
        </tr>

        {firstFiveContacts.map((contact) => {
          const { pictureUrl, name, popularity } = contact;
          return (
            <tr>
              <td>
                <img src={pictureUrl} alt="image" style={{ height: "80px" }} />
              </td>
              <td>{name}</td>
              <td>{popularity.toFixed(2)}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
