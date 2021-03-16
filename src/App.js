import logo from './logo.svg';
import './App.css';
import contactsJSON from "./contacts.json";
import Contacts from "./Components/Contact";

function App()
 {
  return (
    <div className="App">
     <h1> Iron Contacts </h1>
     <Contacts/>
    </div>
  );
}

export default App;
