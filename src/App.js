import "./App.css";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>

      <div className="buttons">
        <button>Add Random Contact</button>
        <button>Sort by Name</button>
        <button>Sort by Popularity</button>
      </div>

      <ContactList />
    </div>
  );
}

export default App;
