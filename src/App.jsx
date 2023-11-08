import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
console.log("hello world");

function App() {
  const [firstFive, setFirstFive] = useState(contacts);

  const newList = contacts.slice(0, 5);
  console.log(newList);
  return (
    <>
      <table>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

    </>
  );
}

export default App;
