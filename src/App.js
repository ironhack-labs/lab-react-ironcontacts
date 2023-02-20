import './App.css';
import { useState } from 'react';
import  contacts from   './contacts.json'
function App() {

  const conFive = contacts.slice(0,5)

  const [contactInfo, setContactInfo] = useState(conFive)

  const addContact = () => {
    const random = contacts[Math.floor(Math.random()* contacts.length)]
    const newList = [...contactInfo]
    newList.push(random)
    setContactInfo(newList)
  }

  const sortName = ()=>{
  const newList = [...contactInfo] //contiene la info + los 5
    newList.sort((a,b)=>{
      if (a.name < b.name){
        return -1
      }
      if (a.name > b.name){
        return 1
      }
      return 0
    })
  
    setContactInfo(newList)
  }
  const sortPopularity= ()=>{
    const newList = [...contactInfo]
      newList.sort((a,b)=>{
        if (a.popularity > b.popularity){
          return -1
        }
        if (a.popularity < b.popularity){
          return 1
        }
        return 0
      })
    
      setContactInfo(newList)
    }

    const deleteContact = (index) => {
      const newArr = [...contactInfo]
      newArr.splice(index, 1)  
      setContactInfo(newArr)
    }

  return (
    <div className="App">
      
      <button onClick={addContact}>ADD</button>
      <button onClick={sortName}>Sort By Name</button>
      <button onClick={sortPopularity}>Sort By Popularity</button>
      <button onClick={deleteContact}>Delete Celebrity</button>
      
      <div>
      <table>
    <thead>
        <tr>
            <th colspan="2">Contacts</th>
        </tr>
    </thead>
    
        <tr>
            <td>Name</td>
            <td>Picture</td>
            <td>Popularity</td>
            <td>Won an oscar</td>
            <td>Won an Emmy</td>
        </tr>
    <tbody>
    {
              contactInfo.map((contact, contact_index) => (
                <tr key={contact_index}>
                  <td><img src={contact.pictureUrl} height="180" width="120"/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                  {contact.wonOscar && <p>🏆</p>}
                  {!contact.wonOscar && <p>No</p>}
                  </td>
                  <td>
                  {contact.wonEmmy && <p>🏆</p>}
                  {!contact.wonEmmy && <p>No</p>}
                  </td>

                </tr>
              ))
            }
    </tbody>
</table>
      </div>

    </div>
  );
}

export default App;

