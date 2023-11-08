import "./App.css";
import contacts from "./contacts.json";


const [contacts, setContacts] = useState(contacts.slice(0, 5));

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
    </div>
  );
}

export default App;
