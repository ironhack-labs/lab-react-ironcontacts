import React, { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

const fiveGuys = contacts.splice(0, 5);

function App() {
  const [contactsArr, setContactsArr] = useState(fiveGuys);

  const randomContact = () => {
    const random = Math.floor(Math.random() * contacts.length);
    const addRandom = contacts[random];

    const newArr = [...contactsArr, addRandom];

    setContactsArr(newArr);
  };

  const sortByName = () => {
    const newOrder = [...contactsArr].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContactsArr(newOrder);
  };

  const sortByPop = () => {
    const newOrder = [...contactsArr].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContactsArr(newOrder);
  };
  const deleteContact = (id) => {
    const contactIndex = fiveGuys.findIndex((e) => {
      return e.id === id;
    });
    const seekAndDestroy = [...contactsArr];
    seekAndDestroy.splice(contactIndex, 1);

    setContactsArr(seekAndDestroy);
  };

  return (
    <div className="App">
      <h1> IronContacts</h1>
      <button onClick={randomContact}>Add Random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPop}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>
              <h3>Picture</h3>
            </th>
            <th>
              <h3>Name</h3>
            </th>

            <th>
              <h3> Popularity </h3>
            </th>

            <th>
              <h3> Action</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    style={{ width: "25%" }}
                    src={contact.pictureUrl}
                    alt=""
                  />
                </td>
                <td>
                  <h4>{contact.name}</h4>
                </td>
                <td>
                  <p>{contact.popularity.toFixed(2)}</p>
                </td>
                <td>
                  <button onClick={deleteContact}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
{
  /* const IronContact = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              
            </td>

            

            
          </tr>
        </tbody>
      </table>
    </div>
  );
}; */
}

export default App;
