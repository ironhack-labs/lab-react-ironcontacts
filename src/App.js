
import './App.css';
import data from "./contacts.json";
import { useState } from 'react';




function App() {

  const [contacts, setContacts] = useState(data.slice(0, 5));
  let randomArr = [];
  function addRandomContacts(data) {
    for (let i = 0; i < 5; i++) {
      let dandomIndex = Math.floor(Math.random() * data.length);
      let randomElm = data[dandomIndex];
      randomArr.push(randomElm);
    }
    return setContacts(randomArr);

  }
  function sortContactsByName() {
    const newList = [...contacts];

    newList.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name >= b.name) { return 1 };
      return 0;
    }
    )
    console.log(newList);

    return setContacts(newList);
  }

  function sortContactsByPopularity() {
    const newList = [...contacts];
    newList.sort((a, b) =>
      b.popularity - a.popularity)
    return setContacts(newList);
  }

  function deleteEle(elmTobeDelete) {
    let newList = [...contacts];
    newList = newList.filter((e) => {
      if (e !== elmTobeDelete) {
        return true;
      } else {
        return false;
      }
    })
    console.log(elmTobeDelete);
    console.log(newList);
    return setContacts(newList);
  }


  return (

    <div className="App">
      <h1>contacts</h1>
      <button onClick={() => { addRandomContacts(data) }}>Add random contacts</button>
      <button onClick={() => { sortContactsByName() }}>Sort Contacts by Name</button>

      <button onClick={() => { sortContactsByPopularity() }}>Sort Contacts by Popularity</button>


      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Picture</td>
            <td>popularity</td>
            <td>Won Oscar</td>
            <td>Won Emmy</td>
            <td>Action</td>
          </tr>
        </thead>
        {contacts.map(function (e) {
          return (
            <tbody>
              <tr>
                <td><img className="picture" src={e.pictureUrl} alt="" /></td>
                <td>{e.name}</td>

                <td>{e.popularity.toFixed(2)}</td>
                <td>{e.wonOscar && "🏆"}</td>
                <td>{e.wonEmmy && "🏆"}</td>
                <td><button onClick={() => { deleteEle(e) }}>delete</button></td>
              </tr>
            </tbody>

          );
        })
        }
      </table>
    </div>
  );
}

export default App;
