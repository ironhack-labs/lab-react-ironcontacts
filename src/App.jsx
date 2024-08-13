import "./App.css";
import { useState } from 'react';
import contacts from "./contacts.json";

function App() {

  const firstContacts = contacts.slice(0, 5);
  const [celebrities, setCelebrities] = useState(firstContacts);

  const addRandomContact = () => {

    const otherContacts = contacts.filter(contact => 
      !celebrities.some(celebrity => celebrity.id === contact.id)
    );

    if (otherContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * otherContacts.length);
      const newContact = otherContacts[randomIndex];
      
      setCelebrities((prevCelebrities) => {
        const updatedCelebrities = prevCelebrities.slice();
        updatedCelebrities.push(newContact);
        return updatedCelebrities;
      });
    }
  };

  const sortByName = () => {
    const sortedCelebrities = celebrities.slice(); 
    sortedCelebrities.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setCelebrities(sortedCelebrities);
  };
  
  const sortByPopularity = () => {
    const sortedCelebrities = celebrities.slice();
    sortedCelebrities.sort((a, b) => b.popularity - a.popularity);
    setCelebrities(sortedCelebrities);
  };

  const deleteCelebrity = (id) => {
    const updatedCelebrities = celebrities.filter(celebrity => celebrity.id !== id);
    setCelebrities(updatedCelebrities);
  }


  return (
    <div className="App">
      <h1>Call me Maybe </h1>
      <button onClick={addRandomContact}> Add random Contact</button>
      <button onClick={sortByName}> Name</button>
      <button onClick={sortByPopularity}>popularity</button>
      <table>
      <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {celebrities.map((celebrity) => (
            <tr key={celebrity.id}>
              <td>
                <img
                  src={celebrity.pictureUrl}
                  alt={celebrity.name}
                  className="logo"
                />
              </td>
              <td>{celebrity.name}</td>
              <td>{celebrity.popularity}</td>
              <td>{celebrity.wonOscar ? '🏆 ' : ''}</td>
              <td>{celebrity.wonEmmy ? '🌟 ' : ''}</td>
              <td>
              <button onClick={() => deleteCelebrity(celebrity.id)}> Delete </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
