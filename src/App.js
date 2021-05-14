import React from "react";

import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactsArr, setContactsArr] = React.useState(contacts.slice(0, 5));
  const [backgroundColor, setBackgroundColor] = React.useState("");

  function addRandomContact() {
    const randomIndex = Math.floor(Math.random() * contacts.length);

    setContactsArr([contacts[randomIndex], ...contactsArr]);
  }

  function sortByName() {
    const newArr = [...contactsArr].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setContactsArr(newArr);
  }

  const sortByPops = () => {
    const newArr = [...contactsArr].sort((a, b) => b.popularity - a.popularity);

    setContactsArr(newArr);
  };

  function deleteContact(index) {
    const newArr = [...contactsArr].filter((person, idx) => idx !== index);

    setContactsArr(newArr);
  }

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPops}>Sort by pops</button>
      <BackgroundChanger setBackgroundColor={setBackgroundColor} />
      <table>
        <thead>
          <tr>
            <th>Pic</th>
            <th>Name</th>
            <th>Populatirty</th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((person, index) => {
            function deleteThisContact() {
              deleteContact(index);
            }
            {
            }

            return (
              <Celeb
                {...person}
                index={index}
                key={`${person.id} - ${index}`}
                deleteContact={deleteContact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Celeb(props) {
  return (
    <tr>
      <td>
        <img
          src={props.pictureUrl}
          alt={props.name}
          style={{ height: "150px" }}
        />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity.toFixed(2)}</td>
      <td>
        <button onClick={() => props.deleteContact(props.index)}>Delete</button>
      </td>
    </tr>
  );
}

function BackgroundChanger(props) {
  const [backgroundInput, setBackgroundInput] = React.useState("");

  function handleInputChange(event) {
    setBackgroundInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("STOPPED");
    props.setBackgroundColor(backgroundInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Which color do you want the background to be?</h1>
      <input
        type="text"
        placeholder="Write your color!"
        value={backgroundInput}
        onChange={handleInputChange}
      />
      <button>AGAIN</button>
    </form>
  );
}

export default App;
