import contactsData from "./contacts.json";
import { useState } from "react";
import "./App.css";

function App() {
  let firstFive = contactsData.slice(0, 5);             //slice the first 5 and store that new array in a variable
  const [contacts, setContacts] = useState(firstFive);  //we destructure the array, name a variable and a function that will change our variable:
                                                        //we pass to useState our departing point firstFive
  const randomContact = [...contactsData].filter(contact => !contacts.includes(contact))  //here I got help and Im not sure I understand the syntax and process. 


  const addRandom = () => {

  const randomIndex = Math.floor(Math.random() * randomContact.length) 
  const randomObject  = randomContact[randomIndex]
  setContacts((actuallyContact => [...actuallyContact, randomObject])); ////I started the randomizer but got stuck and asked for help
  }
  



  return (
    <div className="App">
      
                                {/* // <h1> outside of the .map() */}
      <h1>IronContacts</h1> 
      <button onClick={addRandom}> Add Random Contact</button>

      
          <div>
            <table>
              <thead>

             
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
              </tr>
              </thead>

              <tbody>
              {contacts.map((contactObj, index) => {   //we use only the first 5 by using contacts instead of the whole contactsData adn receive each iterations' object

              return (
              <tr key={index}>
                <td>
                  <img src={contactObj.pictureUrl}></img>
                </td>
                <td>{contactObj.name}</td>
                <td>{contactObj.popularity}</td>
                <td>
                  {contactObj.wonOscar
                  ?  <p>🏆</p>
                  :  <p> </p>
                  }
                </td>

                <td>
                  {contactObj.wonEmmy
                  ?  <p>🏆</p>
                  :  <p>  </p>
                  }
                </td>
              </tr>
              );      
              })}
              </tbody>

              {/* <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr> */}
            </table>
          </div>
        

    </div>
  );
}
export default App;
