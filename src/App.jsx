import "./App.css";
import contacts from "./contacts.json";
import IronhackList from "./components/IronhackList";

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <IronhackList />
    </div>
  );
}

export default App;
