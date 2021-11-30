import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import ContactList from './components/Contacts';



function App() {
  return (
    <main>
    
      <h2>Iron Contacts</h2>
        <ContactList />
      <hr />

    </main>
  );
}

export default App;
