import './App.css';

import contactsData from "./contacts.json";
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="App">
      <Contacts allContacts={contactsData} />
    </div>
  );
}

export default App;
