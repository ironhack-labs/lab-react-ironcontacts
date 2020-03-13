import React, { useState } from "react";
import Contacts from "../contacts.json";
// import Random, { newFamous, useState } from "./RandomFamous";

// list of famous
const list = [];

// Generator List
listGenerator();
function listGenerator() {
  for (let i = 0; i < 5; i++) {
    list.push(Contacts[i]);
  }
}

// Export List
export const FamousList = () => {
  const [lista, setLista] = useState(list);

  const random = () => {
    const newList = [...lista];
    let newFamous;
    let x = newContact();
    function newContact() {
      let max = Contacts.length;
      let contactRandom = Contacts[Math.floor(Math.random() * max)];
      return contactRandom;
    }
    if (list.includes(x)) {
      newContact();
    } else {
      newFamous = x;
    }
    newList.push(newFamous);
    setLista(newList);
  };

  return (
    <div className="table">
      <div className="buttons">
        <button
          className="btn"
          onClick={() => random()}
          type="button"
          style={{ padding: "1em", border: "1px solid black" }}
        >
          Add Random Contact
        </button>
      </div>
      <table className="listFamous">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((person, i) => {
            console.log(person.name, i);
            return (
              <tr key={i}>
                <td>
                  <img src={person.pictureUrl} style={{ width: "100px" }} />
                </td>
                <td>{person.name}</td>
                <td>{person.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Random Contact

function newContact() {
  let max = Contacts.length;
  let contactRandom = Contacts[Math.floor(Math.random() * max)];
  return contactRandom;
}

const random = () => {
  let x = newContact();
  if (list.includes(x)) {
    newContact();
  } else {
    newFamous = x;
  }
};

// export const Button = () => {
//   return (

//   );
// };
