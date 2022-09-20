import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <table>
        <tr>
          <th> Picture</th>
          <th> Name</th>
          <th> Popularity</th>
        </tr>
        <tr>
          <Contact name={contacts.name}></Contact>
        </tr>
      </table>
    </div>
  );
}

export default App;
