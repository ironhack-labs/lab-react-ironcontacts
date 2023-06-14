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
      <table className="actorsTable">
        <thead>
          <tr>
            <th className="picture">Picture</th>
            <th className="widthOne">Name</th>
            <th className="widthOne">Popularity</th>
            <th className="widthTwo">Won Oscar</th>
            <th className="widthTwo">Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {firstIteration.map((el) => {
            return(
              <tr key={el.id}>
                <td className="picture"><img src={el.pictureUrl} alt="picture"/></td>
                <td className="widthOne"><h2>{el.name}</h2></td>
                <td className="widthOne"><p>{el.popularity}</p></td>
                <td className="widthTwo">{el.wonOscar && <p>🏆</p>}</td>
                <td className="widthTwo">{el.wonEmmy && <p>🏆</p>}</td>
              </tr>    
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
