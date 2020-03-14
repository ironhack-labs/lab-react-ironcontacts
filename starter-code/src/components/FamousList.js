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

  // Random
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

  // Sorts
  // Name

  const sortName = () => {
    const newLista = [...lista];
    let sortNameList = newLista.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    setLista(sortNameList);
  };
  // Popularity

  const sortPopularity = () => {
    const newLista = [...lista];
    let sortPopuList = newLista.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 1;
      }
    });
    setLista(sortPopuList);
  };

  // Remove

  const removeChar = index => {
    const newLista = [...lista];
    newLista.splice(index, 1);
    setLista(newLista);
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
        <button
          className="btn"
          onClick={() => sortName()}
          type="button"
          style={{ padding: "1em", border: "1px solid black" }}
        >
          Sort by Name
        </button>
        <button
          className="btn"
          onClick={() => sortPopularity()}
          type="button"
          style={{ padding: "1em", border: "1px solid black" }}
        >
          Sort by Popularity
        </button>
      </div>
      <table className="listFamous">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
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
                <td>
                  <button
                    className="btn-remove"
                    onClick={() => removeChar(i)}
                    type="button"
                  >
                    {"Delete"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// // Random Contact

// function newContact() {
//   let max = Contacts.length;
//   let contactRandom = Contacts[Math.floor(Math.random() * max)];
//   return contactRandom;
// }

// const random = () => {
//   let x = newContact();
//   if (list.includes(x)) {
//     newContact();
//   } else {
//     newFamous = x;
//   }
// };

// export const Button = () => {
//   return (

//   );
// };
