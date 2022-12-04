import React, {useState} from 'react'
import List from './contacts.json'
import './App.css'

const App = () => {
  let contactsArray = List.slice(0, 5)
  const [listArray, setList] = useState(contactsArray)

  const addRandomContact = () => {
    const newContact = List[Math.floor(Math.random() * List.length)]

    if (!contactsArray.includes(newContact)) {
      setList([newContact, ...listArray])
    }
  }

  const sortByPopularity = () => {
    const sortedList = [...listArray].sort((a, b) => b.popularity - a.popularity)

    setList(sortedList)
  }

  const sortByName = () => {
    const sortedList = [...listArray].sort((a, b) => a.name.localeCompare(b.name))

    setList(sortedList)
  }

  const deleteContact = (id) => {
    const deletedContact = [...listArray].filter((contact) => contact.id !== id)

    setList(deletedContact)
  }
  return (
    <div className='body container'>
      <div className='header'>
        <h1 className="contactTitle">IronContacts</h1>
        <div className='butttons col'>

          <button onClick={() => addRandomContact()} className="btn btn-info">Add Random Contact</button>
          <button onClick={() => sortByPopularity()} className="btn btn-info">The most popular</button>
          <button onClick={() => sortByName()} className="btn btn-info">Alphabetically</button>

        </div>
      </div>

      <table className='table table-primary'>
        <thead>
          <tr>
            <td><h5>Picture</h5></td>
            <td><h5>Name</h5></td>
            <td><h5>Popularity</h5></td>
            <td><h5>Won Oscar</h5></td>
            <td><h5>Won Emmy</h5></td>
            <td><h5>Actions</h5></td>
          </tr>
        </thead>

        {listArray.map(({pictureUrl, name, popularity, wonOscar, wonEmmy, id}) => {
          return (
            <tbody key={id}>
              <tr>
                <td><img src={pictureUrl} alt=''className="contactPic"/></td>
                <td><h6>{name}</h6></td>
                <td><h6>{popularity}</h6></td>
                <td><h6>{wonOscar ? <h2>🏆</h2> : <></> }</h6></td>
                <td><h6>{wonEmmy ? <h2>🏆</h2> : <></>}</h6></td>
                <td>
                  <button onClick={() => deleteContact(id)} className="btn btn-outline-secondary">Delete</button>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  );
}

export default App;
