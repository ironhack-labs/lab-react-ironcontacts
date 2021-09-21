
import './App.css';
import Contacts from "./contacts.json"
import { useState } from 'react';

let fiveContacts= []
for(let i = 0; i <= 4 ; i++){
  fiveContacts.push(Contacts[i])
}




function App() {

const [contacts, setContacts] = useState(fiveContacts)


let notAddedContacts = Contacts.filter(contact => !contacts.includes(contact))

const randomContact = (arr) =>{
  return arr[Math.floor(Math.random() * arr.length -1)]
  
}

const deleteContact= (id)=>{

  let deletedArr = contacts.filter(contact => contact.id !== id)
  setContacts(deletedArr)
}

  return (
    <div className="App">
      <div id="buttons">

        <button onClick ={()=> {
          let newContact = randomContact(notAddedContacts)
          let newArr = [...contacts]
          newArr.push(newContact)

          setContacts(newArr)
        }
        } >Add Contact</button>

        <button onClick ={()=> {
          
          let newArr = [...contacts].sort((a,b) => (a.name > b.name ? 1 : ((b.name > a.name) ? -1 : 0) ) )
        
          setContacts(newArr)
        }
        } >Sort by name</button>


        <button onClick ={()=> {
          
          let newArr = [...contacts].sort((a,b) => (a.popularity < b.popularity ? 1 : ((b.popularity < a.popularity) ? -1 : 0) ) )
          
          setContacts(newArr)

        }
        } >Sort by Popularity</button>
        
      </div>


     <table>
       <thead>
         <tr>
           <th>
             Picture
           </th>
           <th>
             Name
           </th>
           <th>
             Popularity
           </th>
           <th>
             Won an Oscar
           </th>
           <th>
           Won an Emmy
           </th>
           <th>
           Delete
           </th>
         </tr>
       </thead>
       <tbody>
         {contacts.map(contact =>(
           <tr key ={contact.id}>
             <td>
               <img src={contact.pictureUrl} alt="" id="profile" />
             </td>
             <td>
               <p>{contact.name}</p>
             </td>
             <td>
             <p>{contact.popularity}</p>
             </td>
             <td>
             {contact.wonOscar&& (
               <p>🏆</p>
             )}
             </td>
             <td>
             <p>{contact.wonEmmy&& (
               <p>🏆</p>
             )}</p>
             </td>
             <td>
             <button onClick={ ()=>deleteContact(contact.id)}
             >Delete</button>
             </td>

           </tr>
         ))}
       </tbody>
     </table>
    </div>
  );
}

export default App;
