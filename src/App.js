import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

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
      },
    ]);
  };

  // const sortbyPopularity = () => {
  //   const orderedContactsByPop = allContacts.sort();
  //   setAllContacts(...allContacts,orderedContactsByPop);
  // };

  const sortbyName = () => {
    const SortedByName = [...allContacts].sort((a,b)=> a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
    setAllContacts(SortedByName);
  };

  return (
    <div className="App">
      <ul>
        <h1>IronContacts</h1>
        <button onClick={addRandomContact}>Add Random Contact</button>
        {console.log(allContacts)};
        {/* <button onClick={sortbyPopularity}>Sort by popularity</button> */}
        <button onClick={sortbyName}>Sort by name</button> 
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
            {allContacts.map((element) => {
              return (
                <>
                  <tr>
                    <td>
                     
                      <img src={element.pictureUrl} alt={element.name} />
                    </td>
                    <td>{element.name}</td> <td>{element.popularity}</td>
                    <td> {element.wonOscar ? "🏆" : null} </td>
                    <td> {element.wonEmmy ? "🏆" : null} </td>
                  </tr>
                </>
              );
            })}
          </thead>
        </table>
      </ul>
    </div>
  );
}

export default App;
