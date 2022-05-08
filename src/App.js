import './App.css';
import contactList from './contacts.json';

function App(props) {

  const firstFiveContactsArray = [contactList[0], contactList[1], contactList[2], contactList[3], contactList[4]];

  return (
    <div className="App">
      <h2> List of Contacts </h2>
      <table>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th> 
                    <th>Won Oscar</th>
                    <th>Won Emmy</th>
                  </tr>


                  { firstFiveContactsArray.map((contact)=> {
                    return (
                  <tr>
                    <td><img src={contact.pictureUrl} alt="" style={{width: '50px'}} /></td>
                    <td>{contact.name}</td>
                    <td>{(Math.round(contact.popularity + Number.EPSILON))}</td>
                    {contact.wonOscar && <td>🏆</td>}
                    {!contact.wonOscar && <td></td>}
                    {contact.wonEmmy && <td>🏆</td>}
                    {!contact.wonEmmy && <td></td>}
                  </tr>
                  )})}
                  

                  
                  
      </table>

    </div>
  );
}

export default App;
