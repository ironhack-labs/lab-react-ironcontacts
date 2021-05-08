import logo from "./logo.svg";
import "./App.css";
import "./Components/ContactsList/ContactsList";
import ContactsList from "./Components/ContactsList/ContactsList";
import contacts from "./contacts.json";

function App() {
  return (
    <div className="App">
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default App;
