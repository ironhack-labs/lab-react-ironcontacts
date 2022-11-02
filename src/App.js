import contacts from "./contacts.json";
import "./App.css";
import { useState } from "react";


function App() {
  let initialPersons = contacts.slice(0, 5);
  const [list, setList] = useState(initialPersons);

  const addContact = () => {

    if(list.length === contacts.length){
      return
    }
    
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const cloneContacts = structuredClone(list);

    const filteredList = list.filter((eachPerson)=>{
      return eachPerson.id === randomContact.id
    })

    if (filteredList.length !== 0){
      addContact()
      return;
    }

    cloneContacts.push(randomContact);

    setList(cloneContacts);
  };

  const sortByPop = () => {
    const cloneContacts = [...list];
    cloneContacts.sort((elem1, elem2) =>
      elem1.popularity > elem2.popularity ? -1 : 1
    );

    setList(cloneContacts);
  };

  const sortByName = () => {
    const cloneContacts = JSON.parse(JSON.stringify(list));
    cloneContacts.sort((elem1, elem2) => (elem1.name > elem2.name ? 1 : -1));

    setList(cloneContacts);
  };

  const deleteContact = (contactId) => {
    const filteredList = list.filter((eachPerson) =>
      eachPerson.id === contactId ? false : true
    );

    setList(filteredList);
  };

  const buttonStyle = {
    backgroundColor: "red",
    opacity: "0.6",
    marginBottom: "50px",
    padding: '20px',
    borderRadius: '20px'
  };

  return (
    <div className="App">
      <div>
        <h3>IronContacts</h3>
        <div>
          <button onClick={addContact} style={buttonStyle}>
            Add Random Contact
          </button>
          <button onClick={sortByPop} style={buttonStyle}>
            Sort by popularity
          </button>
          <button onClick={sortByName} style={buttonStyle}>
            Sort by name
          </button>
        </div>
        <table style={{ margin: "0 auto", width: "100vh", padding: "20px" }}>
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
          {list.map((eachPerson) => {
            return (
              <tbody key={eachPerson.id}>
                <tr>
                  <td>
                    <img
                      src={eachPerson.pictureUrl}
                      alt="picture"
                      width="80px"
                    />
                  </td>
                  <td>{eachPerson.name}</td>
                  <td>{eachPerson.popularity.toFixed(2)}</td>
                  <td>{eachPerson.wonOscar === true ? "🏆" : ""}</td>
                  <td>{eachPerson.wonEmmy === true ? "🏆" : ""}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteContact(eachPerson.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
