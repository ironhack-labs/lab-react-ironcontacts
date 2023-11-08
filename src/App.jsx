import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  // const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));
  const [initialContacts] = useState(contacts)
  const [sortedContacts, setSortedContacts] = useState(contacts.slice(0, 5))
  const [isAscending, setIsAscending] = useState(true)

  const sortAlphabetically = () => {
    const sorted = isAscending
      ? [...sortedContacts].sort((a, b) => a.name.localeCompare(b.name))     //sorting this and going back to the original sort
      : [...sortedContacts].sort((a, b) => b.name.localeCompare(a.name));

    setSortedContacts(sorted);
    setIsAscending(!isAscending);
  };

  const sortByPopularity = () => {
    const sorted = isAscending
      ? [...sortedContacts].sort((a, b) => b.popularity - a.popularity)   
      : [...sortedContacts].sort((a, b) => a.popularity - b.popularity);

    setSortedContacts(sorted);     
    setIsAscending(!isAscending); 
  };

  const deleteContacts = (id) => {
    const updatedContacts = sortedContacts.filter((contacts) => contacts.id !== id);
    setSortedContacts(updatedContacts);
  }



  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={sortAlphabetically}>Sort Alphabetically</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      
      <table>
        <tr key ={contacts.id}>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
        {sortedContacts.map((contacts) => (
        <tr>
          <td>
            <img src={contacts.pictureUrl} 
            style={{ width: "100px", height: "auto" }}/>
          </td>
          <td>{contacts.name}</td>
          <td>{contacts.popularity.toFixed(2)}</td>
          <td className="trophy"> {contacts.wonOscar ? (<p>🏆</p>) : undefined}</td>
          <td className="trophy">{contacts.wonEmmy ? (<p>🌟</p>) : undefined}</td>
          <td><button onClick={() => deleteContacts(contacts.id)}>Delete</button></td>
        </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
