import './App.css';
import ContactList from './components/contacts/ContactList';
import contactsJson from './contacts.json'

const contacts = contactsJson.slice(0, 5)

function App() {
  return (
    <div className="App">
     <h1 className='font-extrabold text-5xl text-start mb-2 ml-2'>IronContacts</h1>
      <ContactList contacts={contacts} />
     
    </div>
  )
}

export default App;
