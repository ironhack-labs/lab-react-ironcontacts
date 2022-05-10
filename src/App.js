import contactsArr from './contacts.json'
import {useState} from 'react'
import './App.css';



function App() {
  let fiveContacts =  [...contactsArr.slice(0, 5)]
  
  let [contactList, setContacts] = useState(fiveContacts)

  const addContact = ( () => {
    let random = Math.floor( (Math.random() * contactsArr.length) -1)
    
    setContacts( (contactList)=>{
      const newArr = contactsArr.filter((el, index) => {
        if (index === random){
          return true
        } else {
          return false
        }
      })
      return contactList.concat(newArr)
    })

  })
  
  const sortByName = ( () => {
    const orderName = [...contactList.sort((a, b) => a.name.localeCompare(b.name))]
    setContacts(orderName)
  })
  const sortByPop = ( () => {
    const orderName = [...contactList.sort((a, b) => a.popularity - b.popularity)]
    setContacts(orderName)
  })

  const deleteRow = ((el) => {
    const target = document.getElementById(el.target.id)
    target.parentNode.removeChild(target)
    setContacts(contactList)
  }) 

  
  return (
    <div className="App">
      <button onClick={addContact}>Add Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPop}>Sort by Popularity</button>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Populatrity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </thead>
        {contactList.map( (contact, index)=> {
        return (
          <>
            <tr id={index} key={index}>
              <td><img src={contact.pictureUrl} alt={contact.name}/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : ''}</td>
              <td>{contact.wonEmmyr ? "🏆" : ''}</td>
              <button id={index} onClick={deleteRow}>Delete Row</button>
            </tr>
          </>
          )
        })}
    </table>
    </div>
  );
}

export default App;
