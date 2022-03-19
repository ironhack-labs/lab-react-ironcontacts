import contacts from "./contacts.json";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const initalState = contacts.slice(0, 5);
  const [displayedContacts, setDisplayedContacts] = useState(initalState);

  const addRandomContact = () => {
    let random = Math.floor(Math.random() * contacts.length);
    let randomAdd = contacts[random];
    setDisplayedContacts([...displayedContacts, randomAdd]);
  };

  const sortByName = () => {
    let pops = displayedContacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setDisplayedContacts([...pops]);
  };
  const sortByPopularity = () => {
    let pops = displayedContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    setDisplayedContacts([...pops]);
  };

  const deleteContact = (id) => {
    console.log("del");
    let newList = displayedContacts.filter((el) => el.id != id);
    setDisplayedContacts([...newList]);
  };

  return (
    <div>
      <button onClick={() => addRandomContact()}>Add Random</button>
      <button onClick={() => sortByName()}>Sort by name</button>
      <button onClick={() => sortByPopularity()}>Sort by popularity</button>
      <table width="100%" style={{ textAlign: "left", margin: "0 auto" }}>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar</th>
            <th>Emmy</th>
            <th>Delete</th>
          </tr>

          {displayedContacts &&
            displayedContacts.map((el, i) => {
              return (
                <tr key={i}>
                  <td>
                    {el.pictureUrl && (
                      <img
                        src={el.pictureUrl}
                        width="50px"
                        height="auto"
                        alt="test"
                      />
                    )}
                  </td>
                  <td>{el.name}</td>
                  <td>{el.popularity}</td>
                  <td>{el.wonOscar ? "🏆" : null}</td>
                  <td>{el.wonEmmy ? "🏆" : null}</td>
                  <td>
                    <button onClick={() => deleteContact(el.id)}>delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
