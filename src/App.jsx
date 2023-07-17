import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const firstFiveActors = contacts.slice(0, 5);
  const [contactsData, setContactData] = useState(firstFiveActors);

  function handleClickRandom(arr) {
    const minLength = 5;
    const maxLength = arr.length;

    if (maxLength <= minLength) {
      return -1;
    }

    const randomIndex = Math.floor(
      Math.random() * (maxLength - minLength) + minLength
    );

    setContactData((prevState) => {
      const updatedState = [...prevState];

      updatedState.push(contacts[randomIndex]);
      return updatedState;
    });
  }

  function handleSortPopularity() {
    setContactData((prevState) => {
      const updatedState = [...prevState];

      updatedState.sort((a, b) => {
        if (a.popularity < b.popularity) {
          return -1;
        }
        if (a.popularity > b.popularity) {
          return 1;
        }
        return 0;
      });
      return updatedState;
    });
  }

  function handleSortName() {
    setContactData((prevState) => {
      const updatedState = [...prevState];

      updatedState.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      return updatedState;
    });
  }

  function handleDelete(actorId) {
    console.log("delte actor");
    setContactData((prevState) => {
      const updatedState = [...prevState];
      return updatedState.filter((actor) => actor.id !== actorId);
    });
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts Sui</h1>
      <button className="randomBtn" onClick={() => handleClickRandom(contacts)}>
        Create a Random Contact
      </button>
      <button className="randomBtn" onClick={() => handleSortPopularity()}>
        Sort by popularity
      </button>
      <button className="randomBtn" onClick={() => handleSortName()}>
        Sort by name
      </button>
      <table style={{ outline: "1px solid white" }}>
        <tbody>
          <tr style={{ outline: "1px solid white" }}>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
          {contactsData.map((actor, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={actor.pictureUrl}
                    alt=""
                    style={{ width: "100px" }}
                  />
                </td>
                <td>{actor.name}</td>
                <td>{actor.popularity}</td>
                {actor.wonOscar ? <td>🏆</td> : <td></td>}
                {actor.wonEmmy ? <td>🏆</td> : <td></td>}
                <td>
                  <button onClick={() => handleDelete(actor.id)}>Delete</button>
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
