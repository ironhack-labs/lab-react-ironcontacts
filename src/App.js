import { useState } from 'react';
import './App.css';
import data from './contacts.json'


const contacts = data.slice(0, 5);
let remainingContacts = data.slice(5, data.length)

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max);
}
function randomContact() {
  const index = generateRandomInteger(remainingContacts.length)
  const newRandomContact = remainingContacts[index]
  // remove the new selected random contact for not having repeted from the remainingContacts array
  remainingContacts.splice(index, 1)

  return newRandomContact
}


function App() {
  function addIcon(win) { return win ? "🏆" : '' }

  // get a random user
  // WE CANNOT DECLARE STATE OUTSIDE OF THE COMPONET
  const [stateContacts, setContacts] = useState(contacts);

  function racomContactHandler() {
    const contact = randomContact();
    const copyContacts = [...stateContacts]
    copyContacts.push(contact)

    setContacts(copyContacts)
  }


  // SORT ALFABETICLY FUNCTION 

  const [dataSorted, setSorting] = useState(false)

  function sortingNames(myArray, desc) {
    if (desc) {
      myArray.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else {
      myArray.sort(function (a, b) {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    }
  }


  function handleNameSorting(array) {
    let desc = false
    if (!dataSorted) {
      desc = true
      sortingNames(array, desc)
      setSorting(true)
    } else {
      desc = false
      sortingNames(array, desc)
      setSorting(false)
    }
  }



  // SORT By POPULARITY 
  const [PopularitySorted, setPopualaritySorting] = useState(false)

  function sortingPopularity(myArray, desc) {
    if (desc) {
      myArray.sort(function (a, b) {
        if (a.popularity < b.popularity) {
          return -1;
        }
        if (a.popularity > b.popularity) {
          return 1;
        }
        return 0;
      });

    } else {
      myArray.sort(function (a, b) {
        if (a.popularity < b.popularity) {
          return 1;
        }
        if (a.popularity > b.popularity) {
          return -1;
        }
        return 0;
      });
    }
  }


  function handlePopularitySorting(array) {
    let des;
    if (!PopularitySorted) {
      des = true;
      sortingPopularity(array, des)
      setPopualaritySorting(true)
    } else {
      des = false;
      sortingPopularity(array, des)
      setPopualaritySorting(false)
    }
  }



  // DELETE CONTACT 

  //moviesData is the initial data

  // Create a function taht removes the movie from state
  // GET ALL THE MOVIES MINUS THE MOVIE WE PASS THE IDD
  function handleDeleteContact(contactId) {
    const filteredContacts = stateContacts.filter((con) => {
      return con.id !== contactId;
    })
    setContacts(filteredContacts);
  }


  return (
    <div className="App">
      <h3 style={{ width: "300px", textAlign: "center" }}>Contacts</h3>
      <button onClick={racomContactHandler}>Add Random Contact</button>
      <button onClick={() => handleNameSorting(stateContacts)}>Sort By Name</button>
      <button onClick={() => handlePopularitySorting(stateContacts)}>sort By Popularity</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {stateContacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} style={{ width: '80px' }} alt='actor/actress' /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{addIcon(contact.wonOscar)}</td>
                <td>{addIcon(contact.wonEmmy)}</td>
                <td><button onClick={() => handleDeleteContact(contact.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  );
}

export default App;
