import React from "react"
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";


function App() {
  const [contactsArr, setContactsArr] = React.useState(contacts.slice(0,5))

  function addRandomContact() {
    const randomIndex = Math.floor(Math.random() * contacts.length);

    setContactsArr([contacts[randomIndex], ...contactsArr]); 
  }

  function sortByName() {
    const newArr = [...contactsArr].sort((a,b) =>
      a.name.localeCompare(b.name)
      );

      setContactsArr(newArr);
  }

  {/*we are using an arrow function only to show that it works as well.*/} 
  const sortByPops = () => {
    const newArr = [...contactsArr].sort((a,b) => b.popularity - a.popularity);

    setContactsArr(newArr);
   }

   function deleteContact(index) {
     //should be by id, but in this case we are not checking for unique elements in the list

     const newArr = [...contactsArr].filter((person,idx) => idx != index);

     setContactsArr(newArr);
   }


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPops}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Pic</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((person, index) => {
            //because you are inside the scope of the map, you have access to the person and index variables
            function deleteThisContact() {
              deleteContact(index)
            }

            return <tr key={`${person.id} - ${index}`}> {/*the key is added for performance (otherwise it will give an error); the index is added to avoid repetition and make instances unique */}
              <td><img src={person.pictureUrl} alt={person.name} style={{height: "150px"}} /></td>
              <td>{person.name}</td>
              <td>{person.popularity.toFixed(2)}</td>
              <td><button onClick={deleteThisContact}>Delete</button></td>
            </tr>
          })}

        </tbody>
      </table>


    </div>
  );
}

export default App;
