
import './App.css';
import contactsData from './contacts.json'
import Contacts from './Contacts/Contacts';

const originals = [...contactsData]

function App() {
   
 const contacts = originals.slice(0, 5)
 const remainContacts = originals.slice(5)

  return (
    <div>
      <div>IronContacts</div>
      <Contacts contacts={contacts} remainContacts={remainContacts}/>
    </div>
  );
}

export default App;
