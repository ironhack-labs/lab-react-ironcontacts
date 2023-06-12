import "./App.css";
import contacts from "./contacts.json";
//import { useState } from "react";

//const [contactsInfo, setContacts] = useState(contacts)

const firstIteration =[contacts[0],contacts[1],contacts[2], contacts[3], contacts[4]]
console.log("first Iteration content =",firstIteration)


function App() {
console.log("first Iteration content =",firstIteration)
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {firstIteration.map((el) => {
            return(
              <div key={el.id}>
                <tr>
                  <td><img src={el.pictureUrl} alt="picture"/></td>
                  <td><h2>{el.name}</h2></td>
                  <td><p>{el.popularity}</p></td>
                </tr>  
              </div>   
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
