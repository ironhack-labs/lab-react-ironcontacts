import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import ContactsList from "./components/ContactList.component/ContactsList";

function App() {
  return (
    <div className="App">
      <div className="head-table">
        <table >
          <tr className="rows">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Delete</th>
          </tr>
        </table>
      </div>
      <ContactsList />
    </div>
  );
}

export default App;
