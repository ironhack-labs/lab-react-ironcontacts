import './App.css';
import contactsArr from './contacts.json';
import { useState } from 'react'

function App() {

  let fiveCont = contactsArr.slice(1,6)

  const [contacts, setContacts] = useState(fiveCont)


  const oscar = (props) => {
    return (props.wonOscar ? '🏆'  : "")
  }

  const emmy = (props) => {
    return (props.wonEmmy ? '🏆'  : "")
  }

  const addRandom = () => {

  let filteredPeop = contactsArr.filter((eachCeleb) => {
    return !contacts.includes(eachCeleb)
  })
    let randomCont = filteredPeop[Math.floor(Math.random()*filteredPeop.length)]
    setContacts(contacts.concat(randomCont))
  }



  return (
    <div className="App">
      <h3>IronContacts</h3>

      <button onClick={addRandom}>Add Random Contact</button>

      <table >
        <tr>
        <th>Picture</th>
        <th>name</th>
        <th>popularity</th>
        <th>won Oscar</th>
        <th>won emmy</th>
        </tr>
        <tbody> 
          {contacts.map( (element) => {
            return (
              <tr>
            <td> <img className="celeb"  src={element.pictureUrl}/> </td>
            <td> {element.name} </td>
            <td> {element.popularity} </td>
            <td>  {oscar(element)} </td>
            <td>  {emmy(element)}  </td>
            </tr>
            )
          } )} 
       </tbody>
      </table><br />
      
            
    </div>
  );
}

export default App;






