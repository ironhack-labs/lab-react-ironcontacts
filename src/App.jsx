import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ContactsList from "./components/ContactsList/ContactsList";

function App() {
  return (
    <div className="App">
      <Navbar title="IronContacts" />
      <div className="container mt-4">
        <ContactsList />
      </div>
    </div>
  );
}

export default App;
