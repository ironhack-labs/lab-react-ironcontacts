import React, { useState } from "react";
import TableRow from "../TableRow/TableRow";

const AddRandom = ({ firstFive, largerArr }) => {
  const [items, setItems] = useState(firstFive);

  const randomContact = largerArr[Math.floor(Math.random() * largerArr.length)];

  const addItem = () => {
    setItems([...items, randomContact]);
  };

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
  );
};

export default AddRandom;
