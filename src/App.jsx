import "./App.css";
import Table from "./components/table/Table";
import contactData from './data/contacts.json'

function App() {
  return (
    <div>
      <div className="App">
        <h1>LAB | React IronContacts</h1>
      </div>
      <div>
        <Table props={contactData} />

      </div>
    </div>
  );
}

export default App;
