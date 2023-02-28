import logo from "./logo.svg";
import "./App.css";
import contactData from "./contacts.json";

const contacts = contactData.slice(0, 5);
console.log(contacts);

function App() {
  return (
    <div className="App">
      {contacts.map((eachContact) => {
        return (
          <div className="card">
            <img
              src={eachContact.pictureUrl}
              alt={eachContact.name}
              height={"350px"}
            />
            <br />
            <h3>{eachContact.name}</h3>
            <p>Popularity: {eachContact.popularity}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
