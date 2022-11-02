import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const firstFiveFamous = contacts.slice(0, 5);
  const [list, setList] = useState(firstFiveFamous);

  const addRandomContact = () => {

    if (list.length === contacts.length) {
      return
    }

    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIndex];

      const filteredContact = list.filter((eachContact) => {
       return eachContact.id === randomContact.id
     })

    //causar recursion si el elemento ya existe.
    //console.log(copyContacts);
    //!copyContacts.includes(randomContact) && copyContacts.push(randomContact);
    if (filteredContact.length !== 0) {
      addRandomContact()
      console.log("dup item")
      return // deja de ejecutar la funcion
    }
    let copyContacts = [...list]
    copyContacts.push(randomContact)
    setList(copyContacts);
  };

  const sortByName = () => {
    const copyContacts = [...list];

    copyContacts.sort((elem1, elem2) => {
      return elem1.name > elem2.name ? 1 : -1;
    });

    setList(copyContacts);
  };

  const sortByPopularity = () => {
    const copyContacts = [...list];

    copyContacts.sort((elem1, elem2) => {
      return elem2.popularity - elem1.popularity;
    });

    setList(copyContacts);
  };

  const deleteContact = (contactId) => {
    console.log(contactId);
    const filteredList = list.filter((eachElem) => eachElem.id === contactId ? false : true
    );

    setList(filteredList);
  };

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={addRandomContact}>Add random Contact</button>
      <button onClick={sortByName} style={{ margin: "15px" }}>
        Sort by Name
      </button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table style={{ margin: "0 auto 50px" }}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th style={{ padding: "20px" }}>Won an Oscar</th>
            <th style={{ padding: "20px" }}>Won and Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {list.map((eachFamous) => {
            return (
              <tr key={eachFamous.id}>
                <td>
                  <img src={eachFamous.pictureUrl} alt="" width="50px" />
                </td>
                <td>{eachFamous.name}</td>
                <td>{eachFamous.popularity.toFixed(2)}</td>
                <td>{eachFamous.wonOscar ? "🏆" : ""}</td>
                {/* ternario */}
                <td>{eachFamous.wonEmmy && "🏆"}</td>
                {/* Cortocircuito */}
                <td>
                  <button onClick={() => deleteContact(eachFamous.id)}>Delete</button>
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
