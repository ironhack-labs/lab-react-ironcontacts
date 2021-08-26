import './App.css';
import ContactList from './components/ContactList/ContactList';
import contacts from './contacts.json'

function App() {
  return (
    <div className="App">
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <ContactList contacts={contacts}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
