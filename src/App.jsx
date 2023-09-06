import "./App.css";
import NavBar from "./componets/NavBar/NavBar";
import ContactList from "./componets/contactList/ContactList";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container">

      <ContactList />

      </div> 
    </div>
  );
}

export default App;
