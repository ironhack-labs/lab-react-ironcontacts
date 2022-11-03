import './App.css';
import celebrityContacts from "./contacts.json";
import {useState} from 'react';



function App() {

  const [contacts, setContacts] = useState(celebrityContacts)
  
  
  const firstFive = contacts.slice(0,5);

     const addRandomContact = () => {
    
       let randomIndex = Math.floor( Math.random() * contacts.length);
      let contactToAdd = contacts[randomIndex]

        if(!firstFive.includes(contactToAdd)){
          firstFive.push(contactToAdd);
        }
      
        setContacts(firstFive);
     }
    
//  delete event handler
    const handleOnDelete = (contactId)=> {
        
        const filteredContacts = firstFive.filter( (contact) => {
          return contact.id !== contactId;
        })
        setContacts(filteredContacts)
    }

  return (


    <div className="App">

         <h1>IronContacts</h1>

          <button  onClick={addRandomContact} className='random-btn'>Add Random Contact</button>
        { firstFive.map( (contact) => {
         
           return(
           
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
                 <tbody >
                  <tr key={contact.id}>
                    <td><img src={contact.pictureUrl} alt="contact portrait" className='profile-picture'></img></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td>{contact.wonOscar? '🏆' : '' }</td>
                    <td>{contact.wonEmmy? '🏆' : ''}</td>
                    <td><button onClick={() => handleOnDelete(contact.id)}>Delete</button></td>
                  </tr>

                
                 </tbody>

               </table>
           );
           
        })

        }

    </div>
  );
}

export default App;
