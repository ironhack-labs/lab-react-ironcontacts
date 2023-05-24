import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const arrayInit = Math.floor(Math.random() * (contacts.length - 5));
  const [celebrities, setCelebrities] = useState(contacts);
  return <div className="App"></div>;
}

export default App;
