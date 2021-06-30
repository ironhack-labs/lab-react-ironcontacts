import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contactList, setContactList] = useState(contacts.splice(0, 5));
  const [rest, setRest] = useState(contacts);

  // const AddContact = () => {
  //   let newContacts = contactList.map((person, i) => {
  //     return (
  //       <tr>
  //         <td>
  //           <img src={person.pictureUrl} width="75" />
  //         </td>
  //         <td>
  //           <b>{person.name}</b>
  //         </td>
  //         <td>
  //           <b>{person.popularity.toFixed(2)}</b>
  //         </td>
  //         <td>
  //           <button onClick={() => DeleteContact(i)}>Delete</button>
  //         </td>
  //       </tr>
  //     );
  //   });
  //   return newContacts;
  // }; //Iteration#1 Solution#1

  //Solution#2
  function displayList() {
    return contactList.map((contact, i) => {
      return (
        <tr>
          <td>
            <img src={contact.pictureUrl} style={{ width: "8vw" }} />
          </td>
          <td>
            <h5>{contact.name}</h5>
          </td>
          <td>
            <h5>{contact.popularity.toFixed(2)}</h5>
          </td>
          <td>
            <button onClick={() => deleteName(i)}>Delete</button>
          </td>
        </tr>
      );
    });
  }

  // const AddRandomContact = (i) => {
  //   let restOfContacts = [...rest];
  //   let randomIndex = Math.floor(Math.random() * restOfContacts.length);
  //   let random = restOfContacts[randomIndex];
  //   let copyOfList = [...contactList];
  //   copyOfList.push(random);
  //   setContactList(copyOfList);
  //   let copyOfRest = [...rest];
  //   copyOfRest.splice(randomIndex, 1);
  //   setRest(copyOfRest);
  // }; //Iteration#2 Solution#1

  //Solution#2
  function addRandomContact() {
    let restOfContacts = [...rest];
    let copyOfList = [...contactList];
    let randomIndex = Math.floor(Math.random() * restOfContacts.length);
    let random = restOfContacts[randomIndex];
    copyOfList.unshift(random);
    setContactList(copyOfList);
    restOfContacts.splice(randomIndex, 1);
    setRest(restOfContacts);
  }

  // const SortPopularity = () => {
  //   let popularityList = [...contactList];
  //   popularityList.sort((a, b) => b.popularity - a.popularity);
  //   setContactList(popularityList);
  // };
  // const SortNames = () => {
  //   let nameList = [...contactList];
  //   nameList.sort((a, b) => a.name.localeCompare(b.name));
  //   setContactList(nameList);
  // };//Iteration#3 Solution#1

  //Solution#2
  function sortPopularity() {
    let popularList = [...contactList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContactList(popularList);
  }

  function sortName() {
    let nameList = [...contactList];
    nameList.sort((a, b) => {
      return a.name.localeCompare(b.name);
      // if (a.name < b.name) {
      //   return -1;
      // }
      // if (b.name < a.name) {
      //   return 1;
      // }
      // return 0;
    });
    setContactList(nameList);
  }

  // const DeleteContact = (i) => {
  //   let deleteList = [...contactList];
  //   deleteList.splice(i, 1);
  //   setContactList(deleteList);
  // };//Iteration#4 Solution#1

  //Solution#2
  function deleteName(i) {
    let copyOfList = [...contactList];
    copyOfList.splice(i, 1);
    setContactList(copyOfList);
  }

  return (
    <div className="App">
      <table>
        <h2>IronContact</h2>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortName}>Sort by name ▲</button>
        <button onClick={sortPopularity}>Sort by popularity ▼</button>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {displayList()}
      </table>
    </div>
  );
}

export default App;

{
  /* const ShowContacts = ()  {
    let newContactsArray = contacts.map(eachContact) => {
      return(
        <div><li> Picture: {eachContact.pictureUrl}, Name: {eachContact.name}, Popularity: {eachContact.popularity.toFixed(2)}</li></div>
        
        <ShowContacts />
      )
    }
    return newContactsArray
  } */
}

// function Celeb(props) {
//   return (
//     <tr>
//       <td>
//         <img
//           src={props.pictureUrl}
//           alt={props.name}
//           style={{ height: "150px" }}
//         />
//       </td>
//       <td>{props.name}</td>
//       <td>{props.popularity.toFixed(2)}</td>
//     </tr>
//   );
// }

//let copyOfContact = [...contacts];
// let firstFivedContact = copyOfContact.slice(0, 5);
// //const [contactsArr, setContactsArr] = useState(contacts.slice(0, 5));

// return (
//   <div className="App">
//     <h1>IronContacts</h1>
//     <button>Add Random Contact</button>
//     <button>Sort by name</button>
//     <button>Sort by pops</button>
//     <p>{firstFivedContact.name}</p>
//     <img src={firstFivedContact.pictureUrl} alt="" />
//     <p>{firstFivedContact.name}</p>
//     <p>{firstFivedContact.popularity}</p>
//   </div>
// );
//testing
