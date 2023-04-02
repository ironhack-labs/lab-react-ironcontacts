import './App.css';
import contactsData from "./contacts.json"
import { useState } from 'react';

function App() {

  // Cette ligne prend les 5 premiers contacts du tableau contactsData et les stocke dans la variable fiveContacts.
  const fiveContacts = contactsData.slice(0, 5)
  
  // Le tableau fiveContacts est utilisé comme état initial. La fonction setContact est utilisée pour mettre à jour l'état du tableau.
  const [contacts, setContact] = useState(fiveContacts)

  const randomContact = () => {
    // Cette ligne filtre les contacts qui ne sont pas déjà dans le tableau contacts,
    // en utilisant la méthode filter() pour créer un nouveau tableau avec les contacts restants. 
    // Pour cela, elle utilise la méthode find() pour chercher dans le tableau contacts si le contact existe déjà (en comparant les ids). 
    // Les contacts qui ne sont pas trouvés sont stockés dans remainingContacts.
    const remainingContacts = contactsData.filter(contact => !contacts.find(c => c.id === contact.id));

    // Cette ligne génère un nombre aléatoire entre 0 et la longueur du tableau 
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);

    // Cette ligne récupère le contact correspondant à l'index aléatoire généré précédemment et le stocke dans la variable randomContact.
    const randomContact = remainingContacts[randomIndex];

    // Cette ligne utilise la fonction setContact pour mettre à jour l'état du tableau contacts. 
    // Elle utilise la fonction fléchée pour passer la valeur précédente de contacts à prevContacts 
    // et ajouter le nouveau contact randomContact à la fin du tableau en utilisant le spread operator (...).
    setContact(prevContacts => [...prevContacts, randomContact]);
  };


  const orderContact = () => {

    const orderName = contacts.sort((a,b) => a.name.localeCompare(b.name))
    const newArr = [...orderName]
    setContact(newArr)
    return newArr
  }


  const orderPopularity = () => {

    const orderPop = contacts.sort((a,b) => b.popularity - a.popularity)
    const newArr = [...orderPop]
    setContact(newArr)
    return newArr
  }

  const deleteContact = contactId => {
    const filterContact = contacts.filter(contact => {
      return contact.id !== contactId
    })
    setContact(filterContact)
  }

  return (
    <div className="App">

      <h2>IronContact</h2>
      <button onClick={randomContact}>Add a contact</button>
      <button onClick={orderPopularity}>Sort by popularity</button>
      <button onClick={orderContact}>Sort by name</button>
     

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td>
                  <img className='img' src={contact.pictureUrl}/>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && <p>🏆</p>}</td>
                <td>{contact.wonEmmy && <p>🏆</p>}</td>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </tr>
              
            )
          })}
        </tbody>
      </table>

    </div>
  );
}

export default App;