import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react"; 
import trophy from "./assets/trophy.png";
import sun from "./assets/sun.png";

function App() {
  const[producersToDisplay, setProducersToDisplay] = useState(contacts);

  const firstFiveProducers = producersToDisplay.slice(0, 5);

  const getRandomProducer = () => {
    console.log('click')
    const randomIndex = Math.floor(Math.random() * producersToDisplay.length);
    const randomProducer = producersToDisplay[randomIndex];
    setProducersToDisplay(prevProducers => [...prevProducers, randomProducer]);
  }


  

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={getRandomProducer}>Add Random Contact</button>
      <table>
      <tbody>
      {firstFiveProducers.map(producer => {
        return (
          <tr key={producer.id}>
            <td> Picture:
              <img src={producer.pictureUrl} alt={producer.name} />
            </td>
            <td>Name: {producer.name}</td>
            <td>Popularity: {producer.popularity}</td>
            <td>
            {producer.wonOscar && ( 
              <>
              Won Oscar: 
               <img className="icon" src={trophy}/>
               </>
               )} 
            </td>
            <td>
            {producer.wonEmmy && ( 
              <>
              Won Emmy: 
               <img className="icon" src={sun}/>
               </>
               )} 
            </td>
          </tr>
        )
      })}
      </tbody>
      </table>
    </div>
  );
}

export default App;
