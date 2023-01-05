import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  let contact = contacts.splice(0, 5);
  console.log(contact);
  return (
    <div className="App">
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {contact.map((e) => {
          return (
            <tr>
              <td>
                <img className="pic" src={e.pictureUrl} alt="" />
              </td>
              <td>{e.name}</td>
              <td>{e.popularity}</td>
              {e.wonOscar === true && <td> 🏆</td>}

              {e.wonEmmy=== true && <td> 🏆</td>}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
