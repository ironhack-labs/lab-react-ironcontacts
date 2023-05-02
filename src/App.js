// src/App.js
import "./App.css";
import allContact from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(allContact.slice(0, 5));

  function randomContact() {
    let array = [...allContact];
    for (let i = 0; i < contacts.length; i++) {
      for (let j = 0; j < allContact.length; j++) {
        if (contacts[i].id === allContact[j].id) {
          array.splice(j, 1);
        }
      }
    }
    const random = Math.floor(Math.random() * array.length);

    const arr = [...contacts];
    arr.push(array[random]);
    setContacts(arr);
  }

  function sortByName() {
    let copy = [...contacts];
    // const sorted=copy.name.join()
    const sorted=copy.sort((a,b)=>{
      if(a.name>b.name){
        return 1
      }
      else{
        return -1
      }
    })
    console.log(sorted)
    setContacts(sorted)
  }

  function sortByPopularity() {
    let copy = [...contacts];
    const sorted=copy.sort((a,b)=>{
      if(a.popularity<b.popularity){
        return 1
      }
      else{
        return -1
      }
    })
    console.log(sorted)
    setContacts(sorted)
  }

  function deleteActor(id){
    const newArr=[]
    contacts.forEach((data)=>{
      if(!(data.id===id)){
        newArr.push(data)
      }
    })
    setContacts(newArr)
  }

  return (
    <div className="list">
      <h2>IronContacts</h2>
      <table>
        <thead>
          <tr>
            <th>picture</th>
            <th>name</th>
            <th>popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((data, index) => {
            return (
              <tr>
                <td>
                  <img src={data.pictureUrl} alt="" className="imgSmall" />
                </td>
                <td>{data.name}</td>
                <td>{data.popularity}</td>
                <td>{data.wonOscar ? <p>trophy</p> : <p>no trophy</p>}</td>
                <td>{data.wonEmmy ? <p>trophy</p> : <p>no trophy</p>}</td>
                <td><button onClick={()=>deleteActor(data.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => randomContact()}>Add Random Contact</button>
      <button onClick={() => sortByName()}>Sort By Name</button>
      <button onClick={() => sortByPopularity()}>Sort By Popularity</button>
    </div>
  );
}

export default App;
