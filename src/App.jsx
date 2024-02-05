import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  const [people, setPeople] = useState(contacts.slice(0, 5));

  // let newPeople = people;
  const addRandomContact = () => {
    let RandomNumber = Math.floor(Math.random() * contacts.length);
    let randomPerson = contacts[RandomNumber];
    console.log(randomPerson);
    const updatedPeople = [...people, randomPerson];
    // newPeople.push(randomPerson);
    setPeople(updatedPeople);
    console.log(people);
  };

  // const addRandomContact = () => {
  //   let RandomNumber = Math.floor(Math.random() * contacts.length);
  //   let randomPerson = contacts[RandomNumber];
  //   if (newPeople.some((listPerson) => listPerson.id === randomPerson.id)) {
  //     addRandomContact();
  //   } else {
  //     newPeople.push(randomPerson);
  //   }

  //   setPeople(newPeople);
  //   console.log(people);
  // };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          {people.map((person) => {
            return (
              <tr key={uuidv4()}>
                <td>
                  <img id="actor_img" src={person.pictureUrl} />
                </td>
                <td>{person.name}</td>
                <td>{person.popularity}</td>
                <td>{person.wonOscar && <p>🏆</p>}</td>
                <td>{person.wonEmmy && <p>🌟</p>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
