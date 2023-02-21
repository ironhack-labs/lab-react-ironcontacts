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
        {arr.map((person) => {
          return (
            <table>
              <img src={person.pictureUrl} alt="" />
              <tr> {person.name} </tr>
              <tr> {person.popularity} </tr>
            </table>
          );
        })}
      </table>
    </div>
  );
}

export default App;
