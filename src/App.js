import './App.css';
import Contacts from './components/Contacts/Contacts.jsx'
import './contacts.json'



function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>IronContacts</h1>
        <Contacts className="Contacts" />
    </div>
    </div>
  );
}

export default App;
