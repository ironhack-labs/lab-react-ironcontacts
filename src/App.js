import React, {useState} from 'react';
import './App.css';
import contacts from './contacts.json'

function App() {
let fiveCelebrities = contacts.slice(0,5)
const [celebList, updateCelebs] = useState(fiveCelebrities)
const cloneCelebs = JSON.parse(JSON.stringify(celebList))


function selectRandom () {
    let randomIndex = Math.floor(Math.random() * contacts.length)
    let randomElement = contacts[randomIndex]
    
    updateCelebs([...celebList, randomElement])    
  }
  
function sortByName () {
  let sortedByName = cloneCelebs.sort((a, b)=> {
      if(a.name >b.name){
        return 1;
      } else if (a.name < b.name){
        return -1
      } else {
        return 0
      }
  })
  updateCelebs(sortedByName)
}

function sortByPopularity() {
  let sortedByPopularity = cloneCelebs.sort((a,b) => {
    if (a.popularity > b.popularity) {
      return -1
    }
    else if (a.popularity < b.popularity) {
      return 1 
    }
    else {
      return 0
    }
    
  })
    updateCelebs(sortedByPopularity)
}

  function removeContact(id) {
     let filterCelebs = celebList.filter(celeb => celeb.id !== id)

     updateCelebs(filterCelebs)
  } 

  return (
    <div className="App">
      
      <div>
      <button onClick={selectRandom}>Add random</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button> 
      </div>

      <table>
        <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Popularity</th>
        </tr>
       </thead>                                    
                               
      <tbody>                             
     { 
       celebList.map((contact) => {
         return (
           <tr key={contact.id}>
             <td><img src={contact.pictureUrl} alt = "some person"/></td>
             <td>{contact.name}</td>
             <td>{contact.popularity}</td>
             <button onClick={() => {removeContact(contact.id)}}>Delete</button>
            </tr>   
         )
       })
     }
      </tbody> 
      </table>
    </div>
  );
}

export default App;
