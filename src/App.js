import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';

function App() {

  const firstContacts = contacts.slice(0,5);
  // slice doesn't change the original array
  //console.log(firstContacts)

  // hook to manage Add Random - update firstContacts array
  const [ currentContacts, setContact ] = useState(firstContacts);
  // useState(firstContacts) --> receives the 'default value'
  // destructure the array returned from useState with two things in it:
  // --> the current value of that state, this is a const named  --> currentContacts
  // --> and a function to update that function --> setContact
  // How does it work?
  // everytime + Add Random Contact button is clicked,
  // it's going to call function --> addRandom
  // and when this function is called, React knows that its state has been modified 
  // and kicks off a re-render.

  const addRandom = () => {
    // console.log(contacts)
    // between 0 to 4 -> 5 items
    // every time that addRandom is called, the random function runs and keep in the variable the contact
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    // find inside the currentContacts if the new random item is included
    const checkContact = currentContacts.find(item => item.id === randomContact.id)
    //console.log(checkContact) // undefined
    //alert(checkContact)
    // undefined  --> returns 'undefined' if the item is not found
    // true --> find returns 'true' if it founds the element
    //console.log(checkContact === undefined)
    if(checkContact === undefined) {
      // if the random is not included inside the 'currentContacts'
      // update the 'state'
      // call the function setContact to merge-> currentContacts with the new random contact
      //console.log(randomContact)
      //console.log(currentContacts)
      //console.log('before useState -> setContact', currentContacts)
      // [...list, element] -> it's to concatenate inside one []
      setContact([...currentContacts, randomContact]);
      //console.log('after useState -> setContact', currentContacts)
    }
  }

  const sortName = () => {
    const arrContacts = [...currentContacts];
    // Option 0
    // const sortedContacts = arrContacts.sort((a,b) => {
    //   if (a.name < b.name) return -1
    //   if (a.name > b.name) return  1
    //   return 0
    // });

    // Option 1
    // const sortedContacts = arrContacts.sort((a,b) => {
    //   return a.name < b.name ? -1 
    //         : a.name > b.name ? 1
    //         : 0
    // });
    // Option 2
    const sortedContacts = arrContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
    //console.log(sortedContacts)
    // give the new sorted value / object to render
    setContact(sortedContacts);// update the setContact - with the new array
  }

  const sortPopularity = () => {
    console.log(currentContacts)
    const arrContacts = [...currentContacts];
    // sorted numbers, only with - descending order or + ascending order
    const sortedPopContacts = arrContacts.sort((a,b) => b.popularity - a.popularity)
    //console.log(sortedPopContacts)
    setContact(sortedPopContacts);
  }

  const deleteContact = (id) => {
    console.log(id)
     const contactsAfterRemoved = currentContacts.filter(item => item.id !== id);
     console.log(contactsAfterRemoved)
     // update view of contacts after removed contact
     setContact(contactsAfterRemoved); // update the setContact - with the new array
  }

  return (
    <div className="app-wrapper">
      <div className="header-wrapper">
        <h1>IronContacts</h1>
        <div className="btn-wrapper">
          <button className="random-contact-btn btn" onClick={ addRandom }>+ Random Contact</button>
          <button className="sortePopularity-btn btn" onClick={ sortPopularity }>More popular</button>
          <button className="sortName-btn btn" onClick={ sortName }>Sort by name</button>
        </div>
      </div>
      {/* Iteration 1 - table of contacts */}
      <div className="contacts-table">
        <table>
          <thead>
            <tr>
            <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th></th>
            </tr>
            
            </thead>
            <tbody>
            { // iterate over the currenContacts
              currentContacts.map(contact => {
              return(
                <tr key={contact?.id}>
                  <td><img src={contact?.pictureUrl} alt="" /></td>
                  <td>{contact?.name}</td>
                  <td>{contact?.popularity.toFixed(2)}</td>
                  <td>
                  <button 
                    className="delete-btn btn" 
                    // if I need to pass an argument to the function
                    // I need to use an arrow function
                    // I don't need to use --> (event) because it's already passed to the funciton inside
                    onClick = {() => { 
                      console.log(contact.id); 
                      deleteContact(contact.id);
                    }}
                    >Delete
                  </button>
                  </td>
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
