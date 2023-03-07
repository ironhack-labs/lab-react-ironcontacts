import './App.css';
import DisplayContacts from './components/DisplayContacts';
import contacts from './contacts.json'

function App() {
  return (
    <div className="App">
        <DisplayContacts contacts={contacts}/>
    </div>
  );
}

export default App;
