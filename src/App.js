import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import ContactList from './components/contact-list/ContactList';

function App() {

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div className="container">
        <ContactList />
      </div>
    </div>
  );
}

export default App;
