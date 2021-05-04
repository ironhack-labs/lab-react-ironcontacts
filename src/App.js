import contacts from "./contacts.json";
import './App.css';
import ContactList from "../src/components/contactsList/ContactsList";

function App() {
  return (
    <div>
    <h1>IronContacts</h1>
    <ContactList />
    </div>

  );
}

export default App;
