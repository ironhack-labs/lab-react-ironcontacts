import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import {useState} from 'react'

const contactsCopy = [...contacts]
const startingCelebs = contactsCopy.splice(0,5)

function App() {
  const [list, setList] = useState(startingCelebs)
  const [sortingOrder, setSortingOrder] = useState(false)
  const [popularityOrder, setPopularityOrder] = useState(false)

  const handleAdding = (event) => {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * contactsCopy.length);
    const newCeleb = contactsCopy.splice(randomIndex,1)
    const newList = [...list, ...newCeleb]
    setList(newList)
  }

  const handleSortingAlphabetically = (event) => {
    event.preventDefault();
    const sortedList = [...list]
    sortingOrder ? sortedList.sort((a,b) => b.name.localeCompare(a.name)) : sortedList.sort((a,b) => a.name.localeCompare(b.name))
    setList(sortedList);
    setSortingOrder(!sortingOrder)
  }

  const handleSortingPopularity = (event) => {
    event.preventDefault();
    const sortedList = [...list]
    popularityOrder ? sortedList.sort((a,b) => a.popularity - b.popularity) :     sortedList.sort((a,b) => b.popularity - a.popularity)
    setList(sortedList)
    setPopularityOrder(!popularityOrder)
  }

  const handleDeleting = (event, id) => {
    event.preventDefault();
    const listCopy = [...list]
    const celebToRemove = listCopy.filter(obj => obj.id === id)
    contactsCopy.push(...celebToRemove)
    const newList = listCopy.filter(obj => obj.id !== id)
    setList(newList)
  }


  return (
    <div className="App">
      <div className="button-holder">
        <button onClick={handleAdding}>Add a random contact</button>
        <button onClick={handleSortingAlphabetically}>Sort alphabetically {sortingOrder ? `⬇️` : `⬆️`}</button>
        <button onClick={handleSortingPopularity}>Sort by popularity {popularityOrder ? `⬇️` : `⬆️`}</button>
      </div>
      <table> 
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won An Oscar</th>
            <th>Won An Emmy</th>
          </tr>
        </thead>
        <tbody>
          {list.map(contact => {
            return (<tr>
                    <td><img className= "contact-photo" src={contact.pictureUrl} alt="ContactPhoto" /></td>
                    <td>{contact.name}</td>
                    <td>{Math.round(contact.popularity * 100) / 100}</td>
                    <td>{contact.wonOscar ? 'Yes' : 'No'}</td>
                    <td>{contact.wonEmmy ? 'Yes' : 'No'}</td>
                    <td><button onClick={(event) => handleDeleting(event, contact.id)}>Delete contact</button></td>
                  </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
