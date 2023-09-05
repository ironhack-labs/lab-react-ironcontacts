import "./App.css";
import ContactList from "./components/ContactList/ContactList";

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <div className="container mt-5">
        <ContactList />
      </div>
    </div>
  );
}

export default App;
