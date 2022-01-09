import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';

function App() {

  const firstContacts = contacts.slice(0,5)
  //console.log(firstContacts)

  // hook to manage Add Random - update firstContacts array
  const [ currentContacts, setContact ] = useState(firstContacts);
  // useState(firstContacts) --> receives the 'default value'
  // destructure the array returned from useState with two things in it:
  // --> the current value of that state, this is a const named  --> random
  // --> and a function to update that function --> setContact
  // How does it work?
  // everytime + Add Random Contact button is clicked,
  // it's going to call function --> addRandom
  // and when this function is called, React knows that its state has been modified 
  // and kicks off a re-render.

  const addRandom = () => {
    // console.log(contacts)
    // between 0 to 4 -> 5 items
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    // find inside the currentContacts if the new random item is included
    const checkContact = currentContacts.find(item => item.id === randomContact.id)
    //console.log(checkContact) 
    // find returns 'undefined' if the item is not found
    if(checkContact === undefined) {
      // if the random is not included inside the 'currentContacts'
      // update the 'state'
      // call the function setContact to merge-> currentContacts with the new random contact
      console.log(randomContact)
      console.log(currentContacts)
      console.log('before useState -> setContact', currentContacts)
      setContact([...currentContacts, randomContact]);
      console.log('after useState -> setContact', currentContacts)
    }
  }

  const sortName = () => {
    const arrContacts = [...currentContacts];
    const sortedContacts = arrContacts.sort((a,b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return  1
      return 0
    });
    console.log(sortedContacts)
    // give the new sorted value / object to render
    setContact(sortedContacts)
  }

  const sortPopularity = () => {
    const arrContacts = [...currentContacts];
    // sorted numbers, only with - descending order or + ascending order
    const sortedPopContacts = arrContacts.sort((a,b) => b.popularity - a.popularity)
    console.log(sortedPopContacts)
    setContact(sortedPopContacts)
  }

  
  return (
    <div className="app-wrapper">
      <h1>IronContacts Hello</h1>
      <button className="random-contact" onClick={ addRandom }>+ Add Random Contact</button>
      <button className="sortePopularity" onClick={ sortPopularity }>Sort by popularity</button>
      <button className="sortName" onClick={ sortName }>+ Sort by name</button>

      {/* Iteration 1 - table of contacts */}
      <div className="contacts-table">
        <table>
          <thead>
            <tr>
            <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>

            </thead>
            <tbody>
            {currentContacts.map(contact => {
              return(
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt="" /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
                )  
              })
            }
          </tbody>
        </table>  
      </div>
    </div>
  );
}

export default App;
