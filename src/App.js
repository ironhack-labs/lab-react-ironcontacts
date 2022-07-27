import "./App.css";
import contactsArray from "./contacts.json"
import { useState } from "react";

function App() {

    const [contacts, setContacts] = useState(contactsArray.slice(0, 5));

    const deleteContact = (contactId) => {
        setContacts( (prevContacts) => {
            const newList = prevContacts.filter( (element) => {
                return element.id !== contactId;
            });
            return newList;
        });
    }

  //   const addContact = (contactId) => {
  //     const randomContact = contactObj[Math.floor(Math.random()*items.length)];
  //     setContacts( (prevContacts) => {
  //         const newList = prevContacts.filter( (element) => {
  //             return element.id !== contactId;
  //         });
  //         return newList;
  //     });
  // }


    return (
        <div className="Main">

            {contacts.map((contactObj) => {
                return (
                    <div key={contactObj.id} className="contact">
                        <h2>Name {contactObj.name}</h2>
                        <h3>Popularity {contactObj.popularity}</h3>
                        
                        <>
                        { contactObj.pictureUrl 
                            ? <img src={contactObj.pictureUrl} alt={contactObj.name} />
                            : <p>Sorry, no image</p>
                        }
                        </>
                        <button onClick={() => { deleteContact(contactObj.id) }}>Delete</button>
                        {/* <button onClick={() => { addContact(contactObj.id) }}>Add Random Contact</button> */}
              
                        <h3>Won Oscar: {contactObj.wonOscar && "🏆"}</h3>
                        <h3>Won Emmy: {contactObj.wonEmmy && "🏆" }</h3>
                      
                    </div>
                )
            })}

        </div>
    );
}

export default App;