import contacts from "./contacts.json";

import "./App.css";

import { useState } from "react";



function App() {

  const newArray = contacts.slice(0,5)

  const remainingArray = contacts.slice(6,contacts.length)

  const randomContact = remainingArray[Math.floor(Math.random() * remainingArray.length)]

  const [myContactsArray, setMyContactsArray] = useState(newArray)





  function addContact() {

    const updatedArray = [...myContactsArray, randomContact]

    setMyContactsArray(updatedArray)

  }


  
  function sortName() {

    const sortNameArray = [...myContactsArray.sort((a, b) => 
      a.name.localeCompare(b.name)
    )]


    setMyContactsArray(sortNameArray)
  }



  function sortPop() {
    const sortPopArray = [...myContactsArray.sort((a, b) => 

      b.popularity - a.popularity
    )]


    setMyContactsArray(sortPopArray)
  }

  function deleteCeleb(id) {

    const afterDeleteArray = myContactsArray.filter(celeb => {
      return (celeb.id !== id);
    })

    setMyContactsArray(afterDeleteArray)

  }


  return ( <div className="App">
  <button onClick={addContact}>Add a Contact</button>
  <button onClick={sortName}>Sort by Name</button>
  <button onClick={sortPop}>Sort by Popularity</button>
          <table>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Won Oscar</th>
                  <th>Won Emmy</th>
                  <th>Delete</th>
                </tr>
    {myContactsArray.map(contacts => {
          return (

          
            
                <tr>
                  <td><img src={contacts.pictureUrl} alt={contacts.name} /></td>
                  <td><h3>{contacts.name}</h3></td>
                  <td><p>Rating: {contacts.popularity}</p></td>
                  <td><h3>{(contacts.wonOscar === true) ? <span>🏆</span> : ""}</h3></td>
                  <td><h3>{(contacts.wonEmmy === true) ? <span>🏆</span> : ""}</h3></td>
                  <td><button onClick={() => deleteCeleb(contacts.id)}>Delete</button></td>

                </tr>
              
  
          )

        })}
        </table>
  </div>
)
}
export default App;