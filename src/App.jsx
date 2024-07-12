import "./App.css";
import contacts from "./contacts.json";
import Body from "./components/Body";


function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      {/* <Headers/> */}
        <Body />
    </div>
  );
}

export default App;
