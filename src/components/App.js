import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import List from './List'

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>

      <List></List>
    </div>
  );
}

export default App;
