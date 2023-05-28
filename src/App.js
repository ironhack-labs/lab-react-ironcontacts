import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const slidedContacts = contacts.slice(0, 5);
  const [allContacts, setAllContacts] = useState(slidedContacts);

  const addRandomContact = () => {
    const remainingContacts = contacts.slice(5, contacts.length);
    const oneRandomIndex = Math.floor(Math.random() * remainingContacts.length);
    const oneRandomCeleb = remainingContacts[oneRandomIndex];
    setAllContacts([...allContacts,
      {
        name: oneRandomCeleb.name,
        pictureUrl: oneRandomCeleb.pictureUrl,
        popularity: oneRandomCeleb.popularity,
        wonOscar: oneRandomCeleb.wonOscar,
        wonEmmy: oneRandomCeleb.wonEmmy,
        id: nanoid()
      },
    ]);
  };

  const sortbyPopularity = () => {
    const contactsSortedByPop = [...allContacts].sort((a,b) => b.popularity - a.popularity);
    setAllContacts(contactsSortedByPop);
  };

  const sortbyName = () => {
    const contactsSortedByName = [...allContacts].sort((a,b)=> a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
    setAllContacts(contactsSortedByName);
  };

  const deleteContact = (idToDelete) => {
    const contactedWithDeleted = [...allContacts].filter(({id}) => id !== idToDelete) ;
    setAllContacts(contactedWithDeleted);
  };

  return (
    <div className="App">
      <div className="main">
        <h1>IronContacts</h1>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortbyPopularity}>Sort by popularity</button>
        <button onClick={sortbyName}>Sort by name</button> 
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Actions</th>
              
            </tr>
            {allContacts.map((element) => {
              return (
                <>
                  <tr key={element.id}>
                    <td><img src={element.pictureUrl} alt={element.name} /></td>
                    <td>{element.name}</td> <td>{element.popularity}</td>
                    <td> {element.wonOscar ? "🏆" : null} </td>
                    <td> {element.wonEmmy ? "🏆" : null} </td>
                    <td><button className="deleteButton" onClick={() => deleteContact(element.id)}>Delete</button></td>
                    {console.log(element.id)}
                  </tr>
                </>
              );
            })}
          </thead>
        </table>
      </div>
    </div>
  );
}

export default App;
