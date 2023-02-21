import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

console.log(contacts);

const arr = contacts.slice(0, 5);
console.log(arr);

function App() {
  return (
    <div className="App">
      <h1>HELLO FROM LAB!</h1>
      <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {arr.map((person) => {
          return (
            <tr>
              <td>
                <img src={person.pictureUrl} alt="" />
              </td>
              <td>{person.name}</td>
              <td> {person.popularity}</td>
              <td> {person.wonOscar ? "🏆" : null} </td>
              <td> {person.wonEmmy ? "🏆" : null} </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
