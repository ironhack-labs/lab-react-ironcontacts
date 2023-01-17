import contactsFromJson from "./contacts.json"
import './App.css';
import { useState } from "react";

function App() {
  
  
  const fiveContactsArray = contactsFromJson.slice(0,5)
  const contactsLeft = contactsFromJson.slice(5,Infinity)
  
  
  const [contactsArray,setContactsArray] = useState(fiveContactsArray)
  const [contactsLeftArray,setContactsLeftArray] = useState(contactsLeft)
 

  // iteration 3
  const addRandomContact= ()=>{
    
    //when contactsLeftArray is empty stop adding
    if(contactsLeftArray.length===0) {
      console.log("there are no more contacts")
      return
    } 

    //we pick a random actor from contactsLeftArray
    const randomIndex= Math.floor(Math.random()*contactsLeftArray.length)
    const randomActor=contactsLeftArray[randomIndex]

    setContactsArray( (prevContacts) => {
  
      //copy of  contactsArray
      const newContactsArray= [...prevContacts];
      
      //adding the random actor to the new contacts array
      newContactsArray.push(randomActor)
   
      
     
      return newContactsArray;
    });

    //deleting the random actor from contactsLeftArray
    setContactsLeftArray((prevContactsLeft)=>{

      const newContactsLeftArr = [...prevContactsLeft]
      
      newContactsLeftArr.splice(randomIndex,1)
      
      return newContactsLeftArr
    })
  }
  
  //iteration 4
  const sortByPopularity = () => {
    setContactsArray((prevContacts) => {
      //copy of the array
      const newContactsArray = [...prevContacts];

      // sort the array by its popularity in descending order
      newContactsArray.sort((a, b) => {
        return b.popularity - a.popularity;
      });

      return newContactsArray;
    });
  };
  const sortByName = () => {
    setContactsArray((prevContacts) => {
      const newContactsArray = [...prevContacts];

      newContactsArray.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      return newContactsArray;
    });
  };

  
//iteration 5
  const deleteContact = (id)=>{
    setContactsArray((prevContacts)=>{
      let newContactsArray = [...prevContacts].filter(contact=> {return contact.id!==id} );

     
      
      return newContactsArray
    })
  }

  return (
    <div className="App">
      <button onClick={addRandomContact} >Add random contact</button>
      <button onClick={sortByPopularity} >Sort by popularity</button>
      <button onClick={sortByName} >Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactsArray.map(actor=>{
            return(
              <tr className="row" key={actor.id}>
            
                <td><img className="actor-picture" src={actor.pictureUrl} alt="" /></td>
                <td>{actor.name}</td>
                <td>{actor.popularity.toFixed(2)}</td>
                <td className="trophy">{actor.wonOscar ? "🏆" : ""}</td>
                <td className="trophy">{actor.wonEmmy ? "🏆" : ""}</td>
                <td><button onClick={()=>{deleteContact(actor.id)}}>Delete</button></td>
                
              </tr>
            )
          })}
        </tbody>
       
      </table>
    </div>
  );
}

export default App;
