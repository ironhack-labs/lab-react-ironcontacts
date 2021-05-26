import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
import Contact from "./Contact"
function App() {
  console.log(contacts)
  return (
    <div className="App">
      <Contact contacts/>
    </div>
  );
}

export default App;
