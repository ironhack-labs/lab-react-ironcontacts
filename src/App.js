import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import styled from "styled-components"
import ActorCard from './components/ActorCard';
import TableHead from './components/TableHead'


const MainApp = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 50px 100px;

`

function App() {

   const [getStars,setStars] = useState(contacts.slice(0, 5))

   function addRandomContact(){
    let randomIndex;
    while (!randomIndex || getStars.includes(contacts[randomIndex])) {
        randomIndex = Math.floor(Math.random() * (contacts.length - 1))
      }
      setStars([...getStars, contacts[randomIndex]])
   }

  function sortByName(){
    setStars([...getStars].sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
  }

  function sortByPopularity(){
      setStars([...getStars].sort((a,b) => a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0))
  }


  return (
    <MainApp className="App">
            <h1>IronContacts</h1>
            <div>
                <button onClick={addRandomContact}>Add Random Contact</button>
                <button onClick={sortByName}>Sort By Name</button>
                <button onClick={sortByPopularity}>Sort By Popularity</button>
            </div>
            <table>
                <thead>
                    <TableHead/>
                </thead>
                <tbody>  
                    {getStars.map((el,i) => (
                        <ActorCard key={i}{...el}/>
                    ))}
                </tbody>
            </table>
        
    </MainApp>
  );
}

export default App;
