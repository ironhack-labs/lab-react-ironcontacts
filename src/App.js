import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

const firstFiveContacts = contacts.slice(0, 5);

function App() {
  const [actors, setActors] = useState(firstFiveContacts);

  return (
    <div className="App">
      <table className="tableActors">
        <thead>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity </th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => {
            return (
              <tr key={actor.id}>
                <td>
                  <img
                    src={actor.pictureUrl}
                    width="100px"
                    height="120px"
                    alt="Actor"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
