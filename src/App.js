import React, {useState} from "react";
import "./App.css";
import TableRow from "./Components/TableRow/TableRow";
import Contacts from "./contacts.json";

const firstFive = Contacts.slice(0, 5);
const largerArr = Contacts.slice(5);

const App = () => {
  const AddRandomContact = () => {
    const [items, setItems] = useState(firstFive);

    const randomContact = largerArr[Math.floor(Math.random() * largerArr.length)];

    const addItem = () => {
        setItems([... items, randomContact])
    }
    
    return (
        <div>
            <button onClick={addItem}>Add Contacts</button>
            <table>
        <tbody>
        {items.map((element) => {
          return (
            <TableRow 
              pictureUrl={element.pictureUrl}
              name={element.name}
              popularity={element.popularity.toFixed(2)}
            />
          );
          })}        
        </tbody>
      </table>      
        </div>
    )
  };
  
  return (
    <div>
      <AddRandomContact />      
    </div>    
  );
}

export default App;
