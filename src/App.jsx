import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const actor = contacts.splice(0, 5)



  const addContacts = () => {
    console.log('helloooooo')
    const [contacts2, setContacts] = useState(contacts)

    const randomContacts = contacts[Math.floor(Math.random() * contacts.length)]
    console.log('randomContacts', randomContacts)
    const contactsCopy = [...contacts2]

    contactsCopy.unshift(randomContacts)
    setContacts(contactsCopy)
    console.log('contacts', contacts)
  }




  return (
    <>



      < div className="App" >
        <button onClick={addContacts}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>won Oscar</th>
              <th>won Emmy</th>
            </tr>
          </thead>
          <tbody>

            {
              contacts.map(elm => {

                return (
                  <tr key={elm._id}>
                    <td><img src={elm.pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
                    <td>{elm.name}</td>
                    <td>{elm.popularity}</td>
                    {elm.wonOscar ? <td> 🏆 </td> : <td></td>}
                    {elm.wonEmmy ? <td> 🏆 </td> : <td></td>}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div >
    </>
  );
}


export default App;
