import contacts from "./contacts.json";
import './App.css';
import { useState } from "react";


function App() {
  const five = [...contacts].splice(0, 5)

  const [realContact, setRealContact] = useState(five)
  const addHandler = () => {
    const randomOne = [...contacts][Math.floor(Math.random() * [...contacts].length)]
    setRealContact((prevState) => {
      return [...prevState, randomOne]
    })   
  }
  const nameSortHandler = () => {
    const nameSort = [...realContact].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    setRealContact(nameSort)
  }
  const popSortHandler = () => {
    const popSort = [...realContact].sort((a, b) => b.popularity > a.popularity ? 1 : -1);
    setRealContact(popSort)
  }
  const deleteHandler = (elementId) => {
    const deleteOne = realContact.filter((one) => {
      return one.id !== elementId
    })
    setRealContact(deleteOne)
  }
  return (
    <div className="App">
      <div>
        <h1>Random Contacts</h1>
      </div>
      <div>
        <button onClick={addHandler} >Add Random Contact</button>
        <button onClick={nameSortHandler} >Sort By Name</button>
        <button onClick={popSortHandler} >Sort By Popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        {realContact.map((element) => {
          const pop = Math.round(element.popularity * 100) / 100
          return (
            <tbody key={element.id}>
                <tr>
                  <td><img src={element.pictureUrl} width="80px" alt=""/></td>
                  <td>{element.name}</td>
                  <td>{pop}</td>
                  <td>{element.wonOscar ? '🏆' : ''}</td>
                  <td>{element.wonEmmy ? '🏆': ''}</td>
                  <td><button onClick={() => deleteHandler(element.id)} >Delete</button></td>
                </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  );
}



export default App;