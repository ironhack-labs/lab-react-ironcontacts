import "./App.css";
import contacts from "./contacts.json";
import Table from "./components/Table.jsx";

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <Table contacts={contacts} />
    </div>
  );
}

export default App;
