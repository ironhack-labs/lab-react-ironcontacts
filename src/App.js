import './App.css';
import contacts from './contacts.json';
import ContactList from './components/ContactList';
import AddRandomContact from './components/AddRandomContact';

function App() {

  return (
    <div className="App">
      <ContactList />
    </div>
  );
}

export default App;
