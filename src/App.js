import { useState } from "react";
import "./App.css";
import contactsFromJSON from "./contacts.json";

function App() {
  const contacts = contactsFromJSON.slice(0, 5);

  const [contactArr, setContactArr] = useState(contacts);

  let newListOfContact = contactArr;
  let randomNumberArr = [];
  const newRandomContact = () => {
    console.log(newListOfContact);

    let randomNumber = Math.floor(
      Math.random() * (contactsFromJSON.length - 4) + 5
    );
    randomNumber = Number(randomNumber);

    newListOfContact.push(contactsFromJSON[randomNumber]);
    setContactArr([...contactArr, newListOfContact]);

    if (!randomNumberArr.includes(randomNumber)) {
      randomNumberArr.push(randomNumber);
      return randomNumber;
    }
  };

  const copyOfContactArr = [];
  contactArr.forEach((elm) => {
    copyOfContactArr.push(elm);
  });

  const sortByPopularity = () => {
    copyOfContactArr.sort((a, b) => b.popularity - a.popularity);
    setContactArr(copyOfContactArr);
  };

  const sortByName = () => {
    copyOfContactArr.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name < b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setContactArr(copyOfContactArr);
  };

  const deleteContact = (id) => {
    const newListOfContact = contactArr.filter((contact) => {
      return contact.id !== id;
    });

    setContactArr(newListOfContact);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={() => newRandomContact()}>Add Random Contact</button>
      <button onClick={() => sortByPopularity()}>Sort by popularity</button>
      <button onClick={() => sortByName()}>Sort by name</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactArr.map((contactDetails) => {
            return (
              <tr key={contactDetails.id} className="table">
                <td>
                  <img src={contactDetails.pictureUrl} alt="" />
                </td>
                <td>{contactDetails.name}</td>
                <td>{contactDetails.popularity}</td>
                <td>{contactDetails.wonOscar ? "🏆" : ""}</td>
                <td>{contactDetails.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteContact(contactDetails.id);
                    }}
                  >
                    Deleted
                  </button>
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
