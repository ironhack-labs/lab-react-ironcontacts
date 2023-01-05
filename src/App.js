import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";

function App() {
  let contact = contacts.splice(0,5)
  console.log(contact)
  return (
    <div className="App">
     <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      {contact.map((e) => {
        console.log(e)
        return <tr>
        <td><img className='pic' src={e.pictureUrl} alt="" /></td>
        <td>{e.name}</td>
        <td>{e.popularity}</td>
      </tr>
      })}
     </table>
    </div>
  );
}

export default App;
