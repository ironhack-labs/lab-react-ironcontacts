import React, {useState} from 'react'
import contactsList from './contacts.json'
import './App.css'



const App = () => {
  var contacts = contactsList.slice(0, 5)
  const [list, setList] = useState(contacts)

  const handleAddRandom = () => {
    const newContact = contactsList[Math.floor(Math.random() * contactsList.length)]

    if (!contacts.includes(newContact)) {
      setList([newContact, ...list])
    }
  }

  const handleSortPopularity = () => {
    const sortedList = [...list].sort((a, b) => b.popularity - a.popularity)

    setList(sortedList)
  }

  const handleSortName = () => {
    const sortedList = [...list].sort((a, b) => a.name.localeCompare(b.name))

    setList(sortedList)
  }

  const handleDeleteContact = (id) => {
    const deletedContact = [...list].filter((contact) => contact.id !== id)

    setList(deletedContact)
  }

  return (
    <div className='body'>
      <div className='header'>
        <h1>Iron Contacts</h1>
        <div className='butttonsBox'>

          <button onClick={() => handleAddRandom()}>Add Random Contact</button>
          <button onClick={() => handleSortPopularity()}>Sort by popularity</button>
          <button onClick={() => handleSortName()}>Sort by name</button>

        </div>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <td><strong>Picture</strong></td>
            <td><strong>Name</strong></td>
            <td><strong>Popularity</strong></td>
            <td><strong>Won Oscar</strong></td>
            <td><strong>Won Emmy</strong></td>
            <td><strong>Actions</strong></td>
          </tr>
        </thead>

        {list.map(({pictureUrl, name, popularity, wonOscar, wonEmmy, id}) => {
          return (
            <tbody key={id}>
              <tr>
                <td><img src={pictureUrl} alt='' className='photo' /></td>
                <td>{name}</td>
                <td>{popularity}</td>
                <td>{wonOscar ? <h1>🏆</h1> : <></> }</td>
                <td>{wonEmmy ? <h1>🏆</h1> : <></>}</td>
                <td>
                  <button onClick={() => handleDeleteContact(id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}

export default App