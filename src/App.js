import './App.css';
import contacts from './contacts.json';

function App() {

  const firstContacts = contacts.slice(0,5)
  console.log(firstContacts)
  
  return (
    <div className="App">
    <h1>IronContacts</h1>

    {/* Iteration 1 - table of contacts */}
      <div className="contacts-table">
      <table>
       <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </thead>
        <tbody>
        {firstContacts.map(contact => {
          return(
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} width={50} alt="" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </tr>
            )  
        })
      }
      </tbody>
      </table>
  
 


        
      </div>
    </div>
  );
}

export default App;
