import "./App.css";
import contacts from "./contacts.json";
import Data from "./components/Contact";
//import { useState } from "react";




function App() {
  //const [theme, setTheme] = useState("");
  return (
    <div className="App">
      {contacts.map((contacts) => {
        return <Data contacts={contacts} />;
      })}
    </div>
  );
}
export default App;