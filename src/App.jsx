import "./App.css";
import Table from "./components/Table/Table";
import contacts from "./contacts.json";

function App() {
  
  return (
    <div>
      <div className="App">
        <h1>LAB | React IronContacts</h1>
      </div>

      <div>
        <Table props={contacts}/>
      </div>
    </div>
  );
}

export default App;
