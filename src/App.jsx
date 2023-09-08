import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import ContactList from "./components/ContactList/ContactList";

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