
import './App.css';
import contactsArr from "./contacts.json";
import {useState} from "react";



function App() {

  let fiveContacts = contactsArr.splice(0, 5)
  
  const [contacts, setContacts] = useState(fiveContacts)

  
  const addRandomContact = () => {
    let remainingContacts = contactsArr.splice(6, contactsArr.length)
    const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    const sixCont = [...contacts, randomContact];
    setContacts(sixCont);
  }

  const sortAlphabetically = () => {

    const newList = [...contacts.sort((x, y) => 
     x.name.localeCompare(y.name))]

     setContacts(newList)
  }

  const sortByPopularity = () => {

    const newList = [...contacts.sort((x,y) => {
      if(x.popularity > y.popularity) {
        return -1;
      } else if(x.popularity < y.popularity) {
        return +1;
      } else {
        return 0;
      }
    })]

    setContacts(newList)

  }
  
 
  
      return(
        <div className="App">

        <button onClick={addRandomContact}>Add Random</button> 
        <button onClick={sortAlphabetically}>Sort Alphabetically</button> 
        <button onClick={sortByPopularity}>Sort By Popularity</button> 
        
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>


          {contacts.map((props) => {
            return (
            <tr>
            <td className="pictureUrl"> 
              <img src={props.pictureUrl} alt="actor"></img>
            </td>
            <td className="name">{props.name}</td>
            <td className="popularity">{props.popularity}</td>
            <td className="wonOscar"> {props.wonOscar ? "🏆" : null} </td>
            <td className="wonEmmy"> {props.wonEmmy ? "🏆" : null} </td>
          </tr>
          )
          })}
          
        </table>

       

        </div>
      )
    }



export default App;
