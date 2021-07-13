import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [vip, setvip] = useState(contacts.slice(0, 5));

  const addNewContact = () => {
    let randomIndex = Math.floor(Math.random() * contacts.length);
    let randomElem = contacts[randomIndex];

    setvip([...vip, randomElem]);
  };

  const sortByName = () => {
    let clonedVip = JSON.parse(JSON.stringify(vip));
    clonedVip.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setvip(clonedVip);
  };

  const sortByPopularity = () => {
    let clonedVip = JSON.parse(JSON.stringify(vip));
    clonedVip.sort((a, b) => {
      if (a.popularity < b.name) {
        return 1;
      } else if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    setvip(clonedVip);
  };

  const Deletevip = (index) => {
    let filteredVip = vip.filter((onevip, i) => {
      return index !== i;
    });
    setvip(filteredVip);
  };

  return (
    <>
      <h1>IronContacts</h1>
      <div className="container">
        {" "}
        <button onClick={addNewContact}>Add a new contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <td>
              <h4>Picture</h4>
            </td>
            <td>
              <h4>Name</h4>
            </td>
            <td>
              <h4>Popularity</h4>
            </td>
          </tr>
        </thead>

        {vip.map((single, i) => {
          return (
            <tbody key={i}>
              <tr>
                <td>
                  <img
                    className="picture"
                    src={single.pictureUrl}
                    alt={single.name}
                  />
                </td>
                <td>
                  <p>{single.name}</p>
                </td>
                <td>
                  <p>{single.popularity.toFixed(2)}</p>
                </td>
                <td>
                  <button onClick={() => Deletevip(i)}>Delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}

export default App;
