import './App.css';
import contacts from "./contacts.json"
import { useState } from 'react';


function App() {
  

  const [contactInfo, setContacts] = useState(contacts.slice(0,5))

  const randomArr = [...contacts].filter(contact => !contactInfo.includes(contact))

  
  console.log(randomArr);


  const addRandomContact = () => {  
    console.log( randomArr);
    const intRandom = Math.floor (Math.random() * randomArr.length);
    const addContact = randomArr[intRandom];

    setContacts(([...contactInfo, addContact]));
  }





  return(
    <div className='App'>
    <h1>IronContact</h1>
    <button onClick={addRandomContact}>Add Random Contact</button>  
              <table>
              <thead>
                <tr>
                  <th>Pictures</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Won Oscar</th>
                  <th>Won Emmy</th>

                </tr>
              </thead>
              <tbody>
                
                {contactInfo.map((celebrity, index) => {
                  return(
                      <tr key={index}>
                        <td><img src={celebrity.pictureUrl}/></td>
                        <td>{celebrity.name}</td>
                        <td>{Math.floor( celebrity.popularity * 100 )/100}</td> 
                        {celebrity.wonOscar
                        ? <td>🏆</td>
                        : <td></td>}
                        
                        {celebrity.wonEmmy
                        ? <td>🏆</td>
                        : <td></td>}

                        <button>Delete</button>
                      </tr> 
                  )
                  })}
              </tbody>
          </table>
        
        
        
  </div>
  )
}

export default App;
