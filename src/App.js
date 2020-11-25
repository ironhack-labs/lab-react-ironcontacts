import React , {useState} from 'react';
import './App.css';
import contacts from './contacts.json'
import styled, {createGlobalStyle}from 'styled-components'

const GlobalStyle= createGlobalStyle `


h1{
  font-size:50px;
  text-align:center;
}

.header{
  height: 50px;
  display:flex;
  justify-content: space-evenly;

}

.characters{
  height: 100px;
  display:flex;
  justify-content:space-evenly;
  align-items: center;
}

.characters img{
  height:80%;
  width: auto;
}

.characters button{
  height: 30px;
}


`


function App() {
  const contactsArr= contacts.filter((con,i) =>
  {
    if ( i< 5) {
      return con
    }
  })
  const [ state, setState] = useState(contactsArr)

function randomContact() {
  const random = Math.floor(Math.random()* contacts.length)
  const randomContact= contacts[random]
  const newArr= [...state,randomContact]
  setState(newArr)
} 

function sortByName() {
  const sortNameArr = [...state.sort((a,b) => {return a.name.localeCompare(b.name)})]
  setState(sortNameArr) 
}


function sortByPopularity(){
  const sortPopArr = [...state.sort ((a,b) => {return b.popularity - a.popularity} )]
  setState(sortPopArr) 
}  

function deleteChar(id) {
  const newArray = [...state.filter(c => c.id !== id)]
  setState(newArray)
}

  return (
    <div>
      <GlobalStyle/>
      <h1>IronContacts</h1>
      <button onClick= {randomContact} className= "addcontact-btn">Add Random Contact</button>
      <button onClick={sortByName} className="sortbyname-btn">Sort by Name</button>
       <button  onClick={sortByPopularity} className="sortbypopularity-btn">Sort by popularity</button>
      <div className= "header"> 
        <h3>Picutre</h3>
        <h3>Name</h3>
        <h3>Popularity</h3>
        <h3>Action</h3>
      </div>
    {state.map(con => (
      <div key={con.id} className= "characters">
        <img src= {con.pictureUrl}/>
        <p>{con.name}</p>
        <p>{con.popularity.toFixed(2)}</p>
        <button onClick={() => deleteChar(con.id)}>Delete</button>
      </div>
    ))}
 </div>  
   
  );
}
export default App;
