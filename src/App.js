
import './App.css';
import contactsArr from './contacts.json'
import { useState } from 'react';

function App() {

  
  
  const fiveContacts = (contactsArr.slice(0,5));
  console.log(fiveContacts)
  const [contacts, setContacts] = useState(fiveContacts); 
    
    /* console.log(randomContact) */

    const restOfContacts= contactsArr.slice(6)
    const randomContact= restOfContacts[Math.floor(Math.random() * restOfContacts.length)]
    console.log(randomContact)

    const addRandomContact = () => {
         const newContact = [...contacts, randomContact];
    
         setContacts(newContact);
        
      }
      
      const sortByName = () => {
        const copyContacts = [...contacts]
        copyContacts.sort((a, b) => a.name.localeCompare(b.name))

        setContacts(copyContacts)
      }

      const sortByPopularity = () => {
        const copyContacts = [...contacts]
        copyContacts.sort((a, b) => b.popularity - a.popularity)

        setContacts(copyContacts)
      }

      

  
  return (
    <div className="App">
    <h1>IronContacts</h1>

            <div className="randomButton">
                <button onClick={addRandomContact}>Add Random Contact</button>
            </div>
            <div className="nameButton">
                <button onClick={sortByName}>Sort by name</button>
            </div>
            <div className="popularityButton">
                <button onClick={sortByPopularity}>Sort by popularity</button>
            </div>

        <table>
           <thead>
             <tr>
               <th>Picture</th>
               <th>Name</th>
               <th>Popularity</th>
               <th>Won an Oscar</th>
               <th>Won an Emmy</th>
             </tr>
           </thead>
           
            
     {contacts.map((element) => {
      console.log(element.wonOscar)
       return (
        <tbody>
             <tr>
               <td><img src={element.pictureUrl}/></td>
               <td>{element.name}</td>
               <td>{element.popularity}</td>
               <td>{(element.wonOscar) ? "🏆"  :null}</td> {/* None of the first five actors have an award unfortunately :( */}
               <td>{(element.wonEmmy) ? "🏆" : null}</td>
             </tr>
           </tbody>


         
       );
       
     })}
     </table>

     
    </div>
  );
}

export default App;
