import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Contacts from './contacts.json'
import CelebrityDetail from './components/CelebrityDetail'





function App() {

const [contactsList, setContactsList] = useState(Contacts.slice(0,5))
  
const addRandomContact = () => {
  let randomContact = Contacts[Math.floor(Math.random()* Contacts.length)]
  let clonedContact = [...contactsList]
  clonedContact.push(randomContact)

  setContactsList(clonedContact)
}

const sortbyName = () => {
 let sortedbyName = [...contactsList]
 sortedbyName=sortedbyName.sort((a,b)=>{
      if(a.name>b.name){return 1}
      else if(a.name<b.name){return -1}
      else{return 0}
  })
  setContactsList(sortedbyName)
}

const sortbyPopularity = () =>{
  let sortedbyPopularity = [...contactsList]
 sortedbyPopularity=sortedbyPopularity.sort((a,b)=>{
      if(a.popularity>b.popularity){return 1}
      else if(a.popularity<b.popularity){return -1}
      else{return 0}
  })
  setContactsList(sortedbyPopularity)
}

const deleteCelebrity = (someId) => {
  console.log('deleted')

  let filteredCelebrity = contactsList.filter((celeb)=>{return celeb.id !==someId})

  setContactsList(filteredCelebrity)
}

  return (
    <div className="App">
        <h2>IronContacts</h2>
        <button onClick={addRandomContact}>Add Random contact</button>
        <button onClick={sortbyName}>Sort by Name</button>
        <button onClick= {sortbyPopularity}>Sort by popularity</button>
        <table className="table">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
              {
                contactsList.map((celebrity)=>{
                  return <CelebrityDetail detail = {celebrity} key = {celebrity.id} deleteCelebrityFunc= {deleteCelebrity}/>

                })
              }
        </table>
    </div>
  );
}

export default App;
