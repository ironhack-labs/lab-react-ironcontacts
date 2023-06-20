import './App.css';
import contacts from "./contacts.json"
import { useState } from 'react';


function App() {
  

  const [contactInfo, setContacts] = useState(contacts.slice(0,5))

  const randomArr = [...contacts].filter(contact => !contactInfo.includes(contact))

  
  console.log(randomArr);


  const addRandomContact = () => {  

    const intRandom = Math.floor (Math.random() * randomArr.length);
    const addContact = randomArr[intRandom];

    setContacts((contactActually => [...contactActually, addContact]));
  }

  const sortByName = () =>{
    console.log(contactInfo);
    const compareByAlphabetic = [...contactInfo].sort((a, b) => a.name.localeCompare(b.name))
    setContacts(compareByAlphabetic)
  }


  const sortByPopularity = () => {
    const compareByPopularity = [...contactInfo].sort((a, b) => b.popularity - (a.popularity))
    setContacts(compareByPopularity)
  }

  const deleteContact = (contactId) => {
    const removeContact = contactInfo.filter((element) => {
      return element.id !== contactId
    })
    setContacts(removeContact)
  }


  return(
    <div className='App'>
    <h1>IronContact</h1>
    <button onClick={addRandomContact}>Add Random Contact</button>  
    <button onClick={sortByName}>Sort by Name</button>  
    <button onClick={sortByPopularity}>Sort by Popularity</button>  
              <table>
              <thead>
                <tr>
                  <th>Pictures</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Won Oscar</th>
                  <th>Won Emmy</th>

                </tr>
              </thead>
              <tbody>
                
                {contactInfo.map((celebrity, index) => {
                  return(
                      <tr key={index}>
                        <td><img src={celebrity.pictureUrl}/></td>
                        <td>{celebrity.name}</td>
                        <td>{Math.floor( celebrity.popularity * 100 )/100}</td> 
                        {celebrity.wonOscar
                        ? <td>🏆</td>
                        : <td></td>}
                        
                        {celebrity.wonEmmy
                        ? <td>🏆</td>
                        : <td></td>}

                        <button onClick={() => {deleteContact(celebrity.id)}}>Delete</button>
                      </tr> 
                  )
                  })}
              </tbody>
          </table>
        
        
        
  </div>
  )
}

export default App;
