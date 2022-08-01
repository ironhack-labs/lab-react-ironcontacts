import "./App.css";
import {useState} from 'react'
import contactList from './contacts.json'


function App() {
  //take first five contacts
  const fiveContacts = contactList.slice(0,5)
  //set contacts state
  const [contacts,setContacts]=useState(fiveContacts)
//add random contact to list (and avoid the current contacts)
  const addRandomContact = () => {
    const randomContact =  contactList[Math.floor(Math.random()*contactList.length)];
    //.find returns the first element in the provided array that satisfies the provided testing function
    const found = contacts.find(element => element.id=== randomContact.id);
    if (found === undefined) {
      setContacts((prevList) => {
        const prevListCopy = [...prevList];
        prevListCopy.push(randomContact);
        return prevListCopy;
      })
    }
    else {
      addRandomContact();
    }
  }

  return <div className="App">
    <h1>IronContacts</h1>
<table className="contact-table">
  <button onClick={addRandomContact}>Add Random Contact</button>
  <thead>
  <tr>
    <th><h2>Picture</h2></th>
    <th><h2>Name</h2></th>
    <th><h2>Popularity</h2></th>
    <th><h2>Won an Oscar</h2></th>
    <th><h2>Won an Emmy</h2></th>
  </tr>
  </thead>
      <tbody>
  {/* contacts mapping, a key with an index is needed at parent html tag and to use html we need a return */}
  {contacts.map((contact,index)=>{
    const {name, pictureUrl, popularity,wonOscar, wonEmmy,id}=contact;
    return ( 
    <tr key={index}>
      <td><img src={pictureUrl} alt="contact profile" width={100}/></td>
      <td><p>{name}</p></td>
      <td><p>{popularity.toFixed(2)}</p></td>
      <td>{wonOscar && <span>🏆</span>}</td>
      <td>{wonEmmy && <span>🏆</span>}</td>
  </tr>
  );
  })}
  </tbody>
</table>
  </div>
}
export default App;