import React from "react";
import "./App.css";
import TableRow from "./Components/TableRow/TableRow";
import Contacts from "./contacts.json";

const firstFive = Contacts.slice(0, 5);

function App() {
  const [counter, setCounter] = React.useState(firstFive);

  return (
    <table>
      <tbody>
      {firstFive.map((element) => {
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
  );
}
export default App;
