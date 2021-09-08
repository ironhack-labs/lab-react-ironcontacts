import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";

let actors = contacts.slice(0, 5)

const ShowTable = () => {
  let list = actors.map(actor => {
    return (
      <tr>
        <td><img src={actor.pictureUrl} height = "50px"/></td>
        <td>{actor.name}</td>
        <td>{actor.popularity}</td>
      </tr>
    )
  })
  return list
}

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>picutre</th>
          <th>name</th>
          <th>popularity</th>
        </tr>
        <ShowTable/>
      </table>
    </div>
  );
}

function selectRandomContact(data) {
  let randomNumber = Math.floor(Math.random() * (data.length + 1));
  return data[randomNumber];
}

export default App;
