
import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import contactsJson from './contacts.json';

const contactsSlice = contactsJson.splice(0,5);

function App() {

  const [contacts, setContacts] = React.useState(contactsSlice) 
  const DisplayFiveContacts = () => {

        return contacts.map(contact => {
          
          return (
            <tr> 
                <td> <img src={contact.pictureUrl} alt="teste" />  </td>
                <td>{contact.name} </td>
                <td>{contact.popularity}  </td>

                <td><button onClick={() => remove(contact.id)}>Delete</button> </td>
            </tr>
          )

        })
         
  }


  const remove = (id) =>{

    const contactIndex = contacts.findIndex((element) =>{return element.id === id});
    const newArray = [...contacts];
    newArray.splice(contactIndex, 1);

    console.log(contacts)
    setContacts(newArray);
  }

  const randomContact = () =>{

      const randomIndex =  Math.floor(Math.random() * contactsJson.length);
      const chosenContact = contactsJson[randomIndex];
      setContacts([...contacts, chosenContact]);
  }


  const sortByName = () =>{

    const newArray = [...contacts];
    newArray.sort((a,b) =>{ return a.name.localeCompare(b.name)} );
    
    setContacts(newArray);

 }

 const sortByPop = () =>{

  const newArray = [...contacts];
  newArray.sort((a,b) =>{ return b.popularity - a.popularity} );
  setContacts(newArray);

}

  return (
    <div className="App">
      
      <button onClick={randomContact}>Add random contact </button>
      <button onClick={sortByName}>Sort by name </button>
      <button onClick={sortByPop}>Sort by popularity </button>


      <table className="">
        <tr>
          <th>Picture </th>
          <th>Name </th>
          <th>Popularity </th>
          
        </tr>

      {DisplayFiveContacts()}
      </table>
      
    </div>
  );
}

export default App;
