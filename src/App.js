import './App.css';
import contacts from "./contacts.json";

function App() {
  let ourContacts = contacts.map(
    contact => <div>
      <img src={contact.pictureUrl} alt="" />
      {contact.name}

      {contact.popularity}
    </div>
  )
  return (
    <div className="App">
      {ourContacts}
    </div>
  );
}

export default App;
