import contacts from "./contacts.json";
import './App.css';
import ContactList from "../src/components/contactsList/ContactsList";

function App() {
  return (
    <div className="App">
    <ContactList />
    </div>

  );
}

export default App;
