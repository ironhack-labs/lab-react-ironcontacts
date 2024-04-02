import "./App.css";
import contacts from "./contacts.json"
import { useState } from "react";

import ButtonSort from "./UI/ButtonSort/ButtonSort";
import ButtonAdd from "./UI/ButtonAdd/ButtonAdd";
import Contacts from "./UI/Contacts/Contacts";


function App() {
  const [numActors, setNumActors] = useState(5)
  const [listContacts, setListContacts] = useState(contacts.slice(0, numActors));

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <ButtonAdd setNumActors={setNumActors} setListContacts={setListContacts} listContacts={listContacts} contacts={contacts}  />

      <ButtonSort listContacts={listContacts} setListContacts={setListContacts}></ButtonSort>

      <div>
        <table className="table">
          <thead>
            <tr>

              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Won oscar</th>
              <th scope="col">Won Emmy</th>
            </tr>
          </thead>
          <tbody>



            {listContacts.map((actor) => {
              return (
                <Contacts key={actor.id} name={actor.name} pictureUrl={actor.pictureUrl} popularity={actor.popularity} wonEmmy={actor.wonEmmy} wonOscar={actor.wonOscar} setListContacts={setListContacts} setNumActors={setListContacts} listContacts={listContacts} id={actor.id} contacts={contacts} />
              )
            })}

          </tbody>
        </table>

      </div>



    </div>
  );
}





















export default App;
