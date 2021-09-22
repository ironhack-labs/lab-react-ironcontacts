import './App.css';
import ContactsList from './Components/ContactList/ContactList';

function App() {
  return (
    <div className="App">
    
      <h2>IronContacts</h2>
      <div className='list'>
        <ContactsList></ContactsList>
      </div>

    </div>
  );
}

export default App;
