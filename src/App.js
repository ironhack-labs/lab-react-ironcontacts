// src/App.js
import "./App.css";
import contacsArr from "./contacts.json";

function App() {
  console.log();
  let firstFiveContacts = [
    contacsArr[0],
    contacsArr[1],
    contacsArr[2],
    contacsArr[3],
    contacsArr[4],
  ];

  return (
    <div className="App">
      <h2> List of Contacts </h2>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

        {firstFiveContacts.map((element) => {
          return (
            <tr>
              <td><img className="image" src={element.pictureUrl}></img></td>
              <td>{element.name}</td>
              <td>{element.popularity}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default App;
