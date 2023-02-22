import './App.css';
import Data from './contacts.json'
import { useState }  from 'react'

function App() {
  const fiveContacts = Data.slice(0,5)
  const [contacts, setContacts] = useState(fiveContacts);



    function randomContact(){
      let randomNumber = Math.floor(Math.random() * Data.length -5) +5
      console.log(Data[randomNumber])
      setContacts([Data[randomNumber], ...contacts ])
    }

    const sortByNameContacts = () => {
      const sortedNameContacts = [...contacts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setContacts(sortedNameContacts);
    };

    const sortByPopularityContacts = () => {
      const sortedPopularityContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
      setContacts(sortedPopularityContacts);
    };

    const deleteContact = (contactId) =>{
      const filteredContacts = contacts.filter(contact => {
          return contact.id !== contactId
      })
      setContacts(filteredContacts)
    }
    

  return (
    <div className="App"> 
    <h1>IronContacts</h1>

    <div className="btn">

    <button  onClick={randomContact}>Add Random Contact </button>

    <button onClick={sortByPopularityContacts}>Sort by Popularity </button>

    <button   onClick={sortByNameContacts}>Sort by Name </button>

    </div>

      <table className='app-table'>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>


        </tr>
        {contacts.map((contact =>  (
          <tr>
            <td><img  className='app-img' src={contact.pictureUrl}/></td>
            <td>{contact.name} </td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? <div>🏆 </div> : <div></div>}</td>
            <td>{contact.wonEmmy ? <div> 🏆</div> : <div></div>}</td>
            <button className="btn-delete" onClick={()=>deleteContact(contact.id)}>Delete</button>
          </tr>
        )
        ))}
      </table>
    </div>
  );
}

export default App;
