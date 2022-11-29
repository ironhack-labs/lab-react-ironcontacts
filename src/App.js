import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';


function App() {
  return (
  
    <div className="App table">
      <h1>IronContacts</h1>
      <tr >
        <th><h2>Picture</h2></th>
        <th><h2>Name</h2></th>
        <th><h2>Popularity</h2></th>
        <th><h2>Won Oscar</h2></th>;
        <th><h2>Won Emmy</h2></th>;
      </tr>;
      {contacts.map(contact => {

        return (
          <tr className="table">
            <td><img className="profilePic"src={contact.pictureUrl} alt={contact.name}/></td>
            <td>{contact.name}</td>;
            <td>{contact.popularity}</td>;
            <td>{contact.wonOscar && "🏆"}</td>
            <td>{contact.wonEmmy && "🏆"}</td>
          </tr>
          )
        })
      }
      
      </div>
  );
}

export default App;
