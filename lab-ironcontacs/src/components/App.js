import './App.css';
import contacts from "./../contacts.json"
import Contacts from './ContactsCard';
import DynamicContacts from './DynamicContacts'

function App() {
  return (
<>
    <h1>IronContacts</h1>
    <DynamicContacts/>

</>
  )
}

export default App;
